import React, {memo, useMemo, useRef, useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ModalQuillEditor = ({id, value, rows, label, onChange, text, readOnly, disabled}) => {
  const quillRef = useRef() //🌈
  const [htmlContent, setHtmlContent] = useState('')
  const [noticeTitle, setNoticeTitle] = useState('')
  const [cont, setCont] = useState('')

  const form = new FormData()

  const handleClose = () => {
    //onClose && onClose()
    setHtmlContent('')
  } // 다이얼로그 닫힐 때 에디터 초기화

  // 공지사항 등록 handler
  const handleCreateAlert = () => {
    // const description  =  QuillRef.current?.getEditor().getText();
    //태그를 제외한 순수 text 추출.
    // 검색기능을 구현하지 않을 거라면 굳이 text만 따로 저장할 필요는 없다.
    // if (description.trim()==="") {
    //     alert("내용을 입력해주세요.")
    //     return;
    // }
    //swalConfirm('등록하시겠습니까??').then(function (res) {
    //       if (res.isConfirmed) {
    //         form.append('title', noticeTitle)
    //         form.append('cont', htmlContent)
    //         // 서버로 form 전송
    //         registerNotice(form).then(function (res) {
    //           swal(res.message).then(function (res) {
    //             handleClose()
    //             callGetNoticeList()
    //           })
    //         })
    //       }
    //     })
  }

  const onChangeTitle = event => {
    setNoticeTitle(event.target.value)
  }

  // 첨부파일
  const addFile = event => {
    event.preventDefault()
    for (let key of Object.keys(event.target.files)) {
      if (key !== 'length') {
        form.append('file', event.target.files[key])
      }
    }
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        // 툴바에 넣을 기능
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{size: ['small', false, 'large', 'huge']}, {color: []}],
          [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}, {align: []}],
        ],
      },
    }),
    [],
  )
  return (
    <>
      <ReactQuill
        id={id || ''}
        // ref={quillRef}
        ref={element => {
          if (element !== null) {
            //  quillRef.current = element
          }
        }}
        value={value}
        onChange={onChange}
        modules={modules}
        theme='snow'
        style={{marginBottom: '6%', padding: '0'}} // style
      />
    </>
  )
}

export default ModalQuillEditor
