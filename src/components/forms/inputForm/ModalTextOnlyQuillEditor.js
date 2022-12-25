import React, {useMemo, useRef} from 'react'
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
}) => {
  const QuillRef = useRef()

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

  return (
    <CCol style={{height: '300px'}} className={'pb-5'}>
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

export default ModalTextOnlyQuillEditor

const EditorStyle = styled(ReactQuill)`
  background-color: ${({readOnly}) => (readOnly ? '#d8dbe0' : 'transparent')};
  .ql-toolbar {
    display: ${({readOnly}) => (readOnly ? 'none' : 'block')};
  }
`
