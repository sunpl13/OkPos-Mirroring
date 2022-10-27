import {CButton, CImage, CModal, CModalBody, CModalFooter, CModalHeader} from '@coreui/react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
interface ModalTest {
  onClick: () => void
  onChange: () => void
  url: string
  visible: boolean
  setVisible: (state: boolean) => void
}

const ThumbnailModal = ({visible, setVisible, url}: ModalTest) => {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    setImgUrl(url)

    return () => {
      setImgUrl(url)
    }
  }, [url])
  const onChangeImg = (selectedUrl: string) => {
    setImgUrl(selectedUrl)
  }
  return (
    <CModal alignment='center' size='xl' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader></CModalHeader>
      <CModalBody className='clearfix'>
        <CImage align='center' fluid src={imgUrl} alt='안녕하세요' width={600} />
        <MultipleRows>
          <img
            src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg'
            alt='이미지1'
            onClick={() => onChangeImg('https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg')}
          />
          <img
            src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg'
            alt='이미지2'
            onClick={() => onChangeImg('https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg')}
          />
          <img
            src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg'
            alt='이미지3'
            onClick={() => onChangeImg('https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg')}
          />
          <img
            src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg'
            alt='이미지4'
            onClick={() => onChangeImg('https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg')}
          />
        </MultipleRows>
      </CModalBody>
      <CModalFooter>
        <CButton color='danger' onClick={() => setVisible(false)}>
          삭제
        </CButton>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ThumbnailModal

const MultipleRows = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 10px;
  margin-top: 20px;
  & img {
    width: 80px;
    height: 60px;
  }
`
