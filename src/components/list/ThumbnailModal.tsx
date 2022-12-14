import {CButton, CImage, CModal, CModalBody, CModalFooter} from '@coreui/react'
import {useState} from 'react'
import {antdImageFormat} from '../../utils/awsCustom'

export interface IImage {
  img: string
  altName: string
}

interface IThumbnail {
  thumbnails: any
  visible: boolean
  url: string
  setVisible: (state: boolean) => void
}

const ThumbnailModal = ({visible, setVisible, url}: IThumbnail) => {
  const [imgUrl, setImgUrl] = useState('')
  // useEffect(() => {
  //   setImgUrl(thumbnails[0].img)

  //   return () => {
  //     setImgUrl(thumbnails[0].img)
  //   }
  // }, [thumbnails])
  //const onChangeImg = (selectedUrl: string) => {
  //     setImgUrl(selectedUrl)
  //   }
  return (
    <CModal alignment='center' size='xl' visible={visible} onClose={() => setVisible(false)}>
      {/*<CModalHeader></CModalHeader>*/}
      <CModalBody className='clearfix'>
        <CImage align='center' fluid src={antdImageFormat(url)} alt='안녕하세요' width={600} />
        {/* <MultipleRows>
          {thumbnails.map(item => (
            <CImage key={item.img} src={item.img} alt={item.altName} width={80} height={60} />
          ))}
        </MultipleRows> */}
      </CModalBody>
      <CModalFooter>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ThumbnailModal

//const MultipleRows = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 0 10px;
//   margin-top: 20px;
//   & img {
//     width: 80px;
//     height: 60px;
//   }
// `
