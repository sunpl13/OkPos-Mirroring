import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {materiaList} from '../../../utils/columns/partnerCenter/Columns'
import MeterialDetailModal from '../../../components/Modal/partnerCenter/DataRoom/DataRoomDetailModal'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const DataRoom = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)

  const [editor, setEditor] = useState('')

  // 자료실 API
  const getList = async () => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_DATAROOMS,
      })
      console.log(result)
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setItems(result?.adminDataRoomPartnerDTOs)
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowMaterialDetailModal = async ({id}) => {
    if (id) {
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.PARTNER_DATAROOMS}/${id}`,
        })
        console.log(result)
        if (!isSuccess || isEmpty(result)) {
          return
        }
        if (code === 1000) {
          setSelectedItem({
            id: id,
            ...result,
          })
          setEditor(result?.content)
          setEditCheck(result)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setSelectedItem({})
      setEditCheck({})
      setEditor('')
    }
    setShowModal(!showModal)
  }

  // Modal UpDate
  const handleDetailModalUpDate = async () => {
    const {id, title, content, dataRoomFiles, dataRoomImages, category} = selectedItem
    const dataOptions = {
      DRIVER: '드라이버',
      MANUAL: '매뉴얼',
      FIRMWARE: '펌웨어',
      TECHNIC_ARTICLE: '기술자료',
      OTHER: '기타',
    }
    const json = JSON.stringify({
      title: title,
      content: editor,
      category: dataOptions[category],
      files: {},
      images: [],
    })
    if (id) {
      if (window.confirm('수정하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        if (!category) return alert('카테고리를 선택해 주세요')
        if (!editor) return alert('본문을 입력해 주세요.')
        try {
          const {
            data: {isSuccess, result, code, message},
          } = await ApiConfig.request({
            method: HttpMethod.PUT,
            url: `${EndPoint.PARTNER_DATAROOMS}/${id}`,
            data: json,
          })
          console.log(message, result)
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            setShowModal(false)
            return alert(message)
          }
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      if (window.confirm('등록하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        //if (!dataRoomFiles) return alert('파일을 등록해 주세요')
        if (!category) return alert('카테고리를 선택해 주세요')
        if (!editor) return alert('본문을 입력해 주세요.')
        try {
          const {
            data: {isSuccess, result, code, message},
          } = await ApiConfig.request({
            method: HttpMethod.POST,
            url: EndPoint.PARTNER_DATAROOMS,
            data: json,
          })
          console.log(message, result)
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            setShowModal(false)
            return alert(message)
          }
        } catch (error) {
          console.log(error)
        }
        setShowModal(false)
      }
    }
  }

  const handleMaterialModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handleMaterialModalOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.PATCH,
          url: `${EndPoint.PARTNER_DATAROOMS}/${id}`,
        })
        console.log(result)
        if (!isSuccess || isEmpty(result)) {
          return
        }
        if (code === 1000) {
          alert(message)
          window.location.reload()
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <CRow>
      <PageHeader title='자료 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowMaterialDetailModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowMaterialDetailModal}
              columns={materiaList}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <MeterialDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleMaterialModalOnChange}
        upDate={handleDetailModalUpDate}
        onDelete={handleMaterialModalOnDelete}
        editor={editor}
        setEditor={setEditor}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </CRow>
  )
}

export default DataRoom
