import React, {useMemo, useRef, useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {CCol, CFormLabel} from '@coreui/react'
import styled from 'styled-components'

const ModalTextOnlyQuillEditor = ({
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
  const [nowLength, setNowLength] = useState(0)

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{size: ['small', false, 'large', 'huge']}, {color: []}],
          [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}, {align: []}],
        ],
      },
    }
  }, [])

  // 텍스트 길이 체크
  const handleEditorOnChange = item => {
    if (maxLength) {
      const textReplace = item.replace(/<[^>]*>?| /g, '').length
      setNowLength(textReplace)
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
          {maxLength && `* ${nowLength}/${maxLength}자 까지 입력 가능합니다.`}
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

export default ModalTextOnlyQuillEditor

const EditorStyle = styled(ReactQuill)`
  background-color: ${({readOnly}) => (readOnly ? '#d8dbe0' : 'transparent')};
  .ql-toolbar {
    display: ${({readOnly}) => (readOnly ? 'none' : 'block')};
  }
`

const MaxTextMsg = styled.span`
  font-size: 12px;
  padding-left: 10px;
  //color: ${({textLengthCheck}) => textLengthCheck && 'red'};
`
