import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationScheduleListColumns} from '../../../utils/columns/partnerCenter/Columns'
import EducationScheduleDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationScheduleDetailModal'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const EducationScheduleList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)
  const [editor, setEditor] = useState('')
  const [images, setImages] = useState([])
  const [files, setFiles] = useState([])

  // 교육 일정 리스트 API
  const getList = async () => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_SCHEDULES,
      })
      if (!isSuccess || isEmpty(result)) {
        return alert(message)
      }
      if (code === 1000) {
        setItems(result?.adminEducationScheduleDTOs)
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
    if (!id) {
      setShowModal(!showModal)
      setSelectedItem({})
    } else {
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.PARTNER_SCHEDULES}/${id}`,
        })
        if (!isSuccess || isEmpty(result)) {
          return
        }
        if (code === 1000) {
          setSelectedItem({
            ...result,
            id: id,
          })
          setEditCheck(result)
          setEditor(result.content)
          setShowModal(!showModal)
          setImages(result?.educationScheduleImages)
          setFiles(
            result?.educationScheduleFiles.map(value => ({
              ...value,
              name: value.title,
            })),
          )
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleDetailModalUpDate = async () => {
    const {id, title} = selectedItem
    let obj = {}
    if (files.length !== 0) {
      files.forEach(value => {
        obj[value?.name] = value.url
      })
    }

    const json = JSON.stringify({
      title: title,
      content: editor,
      files: obj,
      images: images.length !== 0 ? images.map(img => img.url) : [],
    })
    if (id) {
      if (window.confirm('교육 일정을 수정하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        //if (!files) return alert('Not File')
        //if (!images) return alert('Not Image')
        if (!editor) return alert('본문을 입력해 주세요.')
        try {
          const {
            data: {isSuccess, result, code, message},
          } = await ApiConfig.request({
            method: HttpMethod.PUT,
            url: `${EndPoint.PARTNER_SCHEDULES}/${id}`,
            data: json,
          })
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            setSelectedItem({
              ...result,
              id: id,
            })
            setEditCheck(result)
            setEditor(result.content)
            setShowModal(!showModal)
            alert(message)
          } else {
            alert(message)
          }
        } catch (error) {
          console.log(error)
        }
        setShowModal(false)
      }
    } else {
      if (window.confirm('교육 일정을 등록하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        //if (!files) return alert('Not File')
        //if (!images) return alert('Not Image')
        if (!editor) return alert('본문을 입력해 주세요.')
        try {
          const {
            data: {isSuccess, result, code, message},
          } = await ApiConfig.request({
            method: HttpMethod.POST,
            url: EndPoint.PARTNER_SCHEDULES,
            data: json,
          })
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            getList()
            alert(message)
          } else {
            alert(message)
          }
        } catch (error) {
          console.log(error)
        }
        setShowModal(false)
      }
    }
  }

  const handleOrderModalOnChange = ({target: {id, value}}) => {
    console.log(id, value)
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  // 교육 일정 삭제 API
  const handleOrderListOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.PATCH,
          url: `${EndPoint.PARTNER_SCHEDULES}/${id}`,
        })
        if (!isSuccess) {
          return alert(message)
        }
        if (code === 1000) {
          getList()
          alert(message)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    }
    setShowModal(!showModal)
  }

  const handleOrderOnDelete = ({productId}) => {
    if (window.confirm('Delete ?')) {
      setSelectedItem({
        ...selectedItem,
        orderList: selectedItem.orderList.filter(value => value.productId !== productId),
      })
    }
  }

  useEffect(() => {
    if (!showModal) {
      setEditor('')
    }
  }, [showModal])

  return (
    <CRow>
      <PageHeader title='교육 일정 리스트' />
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
              columns={educationScheduleListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <EducationScheduleDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleOrderModalOnChange}
        upDate={handleDetailModalUpDate}
        onDelete={handleOrderListOnDelete}
        editMode={editMode}
        setEditMode={setEditMode}
        editor={editor}
        setEditor={setEditor}
        images={images}
        setImages={setImages}
        files={files}
        setFiles={setFiles}
      />
    </CRow>
  )
}

export default EducationScheduleList
