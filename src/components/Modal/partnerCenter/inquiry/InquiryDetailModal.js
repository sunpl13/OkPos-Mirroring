import {CButton, CForm, CFormTextarea, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import DetailModalTemplate from '../DetailModalTemplate'
import {useState} from 'react'

const InquiryDetailModal = ({upDate, onChange, value, visible, setVisible}) => {
  const {id, userName, userPhoneNum, content, inquiryCategory, inquiryFiles, inquiryReplies} = value
  const [editMode, setEditMode] = useState(false)
  //"- No
  // - 문의 유형
  // - 이름
  // - 전화번호
  // - 문의 내용
  // - 첨부 파일
  // - 답변하기 버튼 / 수정 버튼
  // - 답변
  // - 삭제 버튼"
  return (
    <DetailModalTemplate
      visible={visible}
      title={'문의 상세 보기'}
      setVisible={setVisible}
      upDate={upDate}
      btnText={inquiryReplies ? '수정' : '답변하기'}
      editMode={editMode}
      setEditMode={setEditMode}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'id'}
          placeholder={'문의 번호'}
          label={'문의 번호'}
          value={id}
          onChange={onChange}
          readOnly
          disabled
        />
        <ModalInput
          id={'userName'}
          placeholder={''}
          label={'회원 이름'}
          value={userName}
          onChange={onChange}
          readOnly
          disabled
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'inquiryCategory'}
          placeholder={'문의 유형'}
          label={'문의 유형'}
          value={inquiryCategory}
          onChange={onChange}
          readOnly
          disabled
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'휴대전화번호'}
          label={'휴대전화번호'}
          value={userPhoneNum}
          onChange={onChange}
          readOnly
          disabled
        />
      </CRow>
      <CFormTextarea id='userInquiry' value={content} readOnly={true} disabled rows={9} />
      <CRow className={'p-2'}>
        <ModalFilesInput
          id={'email'}
          placeholder={'첨부파일'}
          label={'첨부파일'}
          value={inquiryFiles}
          onChange={onChange}
          readOnly
          disabled
        />
      </CRow>
      <br />
      <CForm>
        <CFormTextarea
          id='inquiryReplies'
          placeholder={'답변 작성'}
          rows={9}
          value={inquiryReplies}
          onChange={onChange}
        />
      </CForm>
      <CButton onClick={upDate} color='primary'>
        저장
      </CButton>
      <CButton color='danger' onClick={() => setVisible(false)}>
        삭제
      </CButton>
      <CButton color='danger' onClick={() => setVisible(false)}>
        취소
      </CButton>
    </DetailModalTemplate>
  )
}

export default InquiryDetailModal
