import React, {useMemo, useRef} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {CCol, CFormLabel} from '@coreui/react'
import styled from 'styled-components'

const ModalReadOnlyQuillEditor = ({
  id, // Tag ID
  value, // useState
  label, // Title
  isRequired, // isRequired
}) => {
  const QuillRef = useRef()

  return (
    <CCol className={'p-1'}>
      <CCol style={{height: '300px'}} className={'pb-5 p-2'}>
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
          readOnly
          value={value}
          theme='snow'
          placeholder='내용을 입력해주세요.'
          style={{height: '100%'}}
        />
        <br />
      </CCol>
    </CCol>
  )
}

export default ModalReadOnlyQuillEditor

const EditorStyle = styled(ReactQuill)`
  & .ql-container {
    border-radius: 0.375rem;
    & .ql-editor {
      border-top: 1px solid #b1b7c1;
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
    }
  }
  .ql-toolbar {
    display: none;
  }
`
