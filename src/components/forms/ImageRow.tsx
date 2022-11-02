import {useState} from 'react'
import {CFormLabel, CCol, CImage, CRow} from '@coreui/react'
import styled from 'styled-components'
import ThumbnailModal from '../list/ThumbnailModal'

export interface IImage {
  img: string
  altName: string
}

interface IImageArray {
  images: IImage[]
}

const ImageRow = ({images}: IImageArray) => {
  const [showThumbnailModal, setshowThumbnailModal] = useState(false)

  return (
    <>
      <CRow className='mb-3'>
        <CFormLabel>이미지</CFormLabel>
        <ImagesStyle>
          {images.map(item => (
            <CImage
              onClick={() => setshowThumbnailModal(true)}
              key={item.img}
              src={item.img}
              alt={item.altName}
              width={80}
              height={60}
            />
          ))}
        </ImagesStyle>
      </CRow>
      <ThumbnailModal thumbnails={images} visible={showThumbnailModal} setVisible={setshowThumbnailModal} />
    </>
  )
}

export default ImageRow

const ImagesStyle = styled(CCol)`
  & img:not(:last-of-type) {
    margin-right: 5px;
  }
`
