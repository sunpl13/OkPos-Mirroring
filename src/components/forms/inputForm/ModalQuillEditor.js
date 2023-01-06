import React, {useMemo, useRef, useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {CCol, CFormLabel} from '@coreui/react'
import styled from 'styled-components'

const ModalQuillEditor = ({
  id, // Tag ID
  value, // useState
  label, // Title
  isRequired, // isRequired
  readOnly = false,
  setValue, // onChange function
  maxLength, // 문자 길이 int ex) 400
  editorHeight = 300,
}) => {
  const QuillRef = useRef()
  const [textLengthCheck, setTextLengthCheck] = useState(false)

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
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote'],
          [{list: 'ordered'}, {list: 'bullet'}], // 리스트
          [{script: 'sub'}, {script: 'super'}], // superscript/subscript
          [{indent: '-1'}, {indent: '+1'}], // Text 좌우 이동
          [{direction: 'rtl'}], // Text 좌우 끝으로 이동
          [{header: [1, 2, 3, 4, 5, 6, false]}], // Text 제목 크기
          [{color: []}, {background: []}], // Text 색상
          [{font: []}], // Text 폰트
          [{align: []}], // Text 정렬
          ['clean'], // Text 설정 초기화
          //['image', 'video'],
        ],
        //handlers: {
        //           image: imageHandler,
        //         },
      },
    }
  }, [])

  const handleEditorOnChange = item => {
    if (maxLength) {
      const textReplace = item.replace(/<[^>]*>?| /g, '').length
      if (maxLength >= textReplace) {
        setValue(item)
        setTextLengthCheck(false)
      } else {
        setTextLengthCheck(true)
      }
    } else if (!maxLength) {
      setValue(item)
    }
  }

  return (
    <CCol style={{height: `${editorHeight}px`, marginBottom: '20px'}} className={'pb-5'}>
      <CFormLabel htmlFor={`${id}Static`} className='col-form-label'>
        <span className={isRequired && 'required'}>{label || ' * '}</span>
        <MaxTextMsg className={'px-lg-2'} textLengthCheck={textLengthCheck}>
          {maxLength ? `* ${maxLength}자 까지 입력 가능합니다.` : '  '}
        </MaxTextMsg>
      </CFormLabel>
      <EditorStyle
        id={id || ''}
        ref={element => {
          if (element !== null) {
            QuillRef.current = element
          }
        }}
        value={value}
        defaultValue={value}
        onChange={item => (!textLengthCheck ? handleEditorOnChange(item) : handleEditorOnChange(value))}
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
  border-radius: 0.375rem;
  border: none;
  padding-bottom: ${({readOnly}) => (readOnly ? '0' : '67px')};
  .ql-container {
    border-radius: ${({readOnly}) => (readOnly ? '0.375rem' : '0')};
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
  .ql-editor {
    border-radius: ${({readOnly}) => (readOnly ? '0.375rem' : '0')};
  }
  .ql-toolbar {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    display: ${({readOnly}) => (readOnly ? 'none' : 'block')};
  }
`
const MaxTextMsg = styled.span`
  font-size: 12px;
  padding-left: 10px;
  //color: ${({textLengthCheck}) => textLengthCheck && 'red'};
`
//border-top: ${({readOnly}) => (readOnly ? '1px solid #b1b7c1' : 'none')};
