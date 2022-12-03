import React, {useMemo, useRef} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import PropTypes from 'prop-types'
import {CCol, CFormLabel} from '@coreui/react'
import styled from 'styled-components'

const ModalQuillEditor = ({
  id, // Tag ID
  value, // useState
  setValue, // setUseState
  label, // Title
  isRequired, // isRequired
  readOnly = false,
}) => {
  const QuillRef = useRef()

  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    // 파일을 업로드 하기 위한 input 태그 생성
    const input = document.createElement('input')
    const formData = new FormData()
    let url = ''

    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    // 파일이 input 태그에 담기면 실행 될 함수
    input.onchange = async () => {
      const file = input.files
      console.log(file)
      if (file !== null) {
        formData.append('image', file[0])
        try {
          const res = (url = res.data.url)
          // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
          // 해당 DOM의 데이터가 필요하기에 useRef를 사용.
          const range = QuillRef.current?.getEditor().getSelection()?.index
          if (range !== null && range !== undefined) {
            let quill = QuillRef.current?.getEditor()

            quill?.setSelection(range, 1)

            quill?.clipboard.dangerouslyPasteHTML(range, `<img src=${url} alt="이미지 태그가 삽입됩니다." />`)
          }

          return {...res, success: true}
        } catch (error) {
          return {...error.response, success: false}
        }
      }
    }
  }

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{size: ['small', false, 'large', 'huge']}, {color: []}],
          [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}, {align: []}],
          ['image', 'video'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }
  }, [])

  return (
    <CCol style={{height: '400px'}} className={'pb-5'}>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired && 'required'}>{label || ' * '}</span>
      </CFormLabel>
      <EditorStyle
        id={id || ''}
        ref={element => {
          if (element !== null) {
            QuillRef.current = element
          }
        }}
        value={value}
        onChange={setValue}
        modules={modules}
        readOnly={readOnly}
        theme='snow'
        placeholder='내용을 입력해주세요.'
        style={{height: '100%'}}
      />
    </CCol>
  )
}

export default ModalQuillEditor

const EditorStyle = styled(ReactQuill)`
  background-color: ${({readOnly}) => (readOnly ? '#d8dbe0' : 'transparent')};

  .ql-toolbar {
    display: ${({readOnly}) => (readOnly ? 'none' : 'block')};
  }
`
ModalQuillEditor.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
  readOnly: PropTypes.string,
  disabled: PropTypes.string,
  isRequired: PropTypes.bool,
}
