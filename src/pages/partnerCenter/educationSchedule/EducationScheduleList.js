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

  // 교육 일정 리스트 API
  const getSchedules = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.PARTNER_SCHEDULES}?page=${1}`,
      })
      console.log(data)
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
        setItems(data.result?.adminEducationScheduleDTOs)
      } else {
        alert(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSchedules()
  }, [])

  /** Open Modal*/
  const handleShowMaterialDetailModal = async ({id}) => {
    console.log(id)
    if (!id) {
      setShowModal(!showModal)
      setSelectedItem({
        no: 0,
        title: '',
        content: '',
        files: '',
        images: '',
      })
    } else {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.PARTNER_SCHEDULES}/${id}`,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
          setSelectedItem(data.result)
          setEditCheck(data.result)
          setEditor(data.result.content)
          setShowModal(!showModal)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleDetailModalUpDate = () => {
    const {no, title, content, files, images} = selectedItem
    if (no !== 0) {
      if (editCheck.title !== title || editCheck.content !== content) {
        if (window.confirm('Edit ?')) {
          if (!title) return alert('Not Title')
          //if (!files) return alert('Not File')
          //if (!images) return alert('Not image')
          if (!content) return alert('Not Content')
          setItems(items.map(value => (value.no === no ? selectedItem : value)))
          setShowModal(false)
        }
      } else {
        setShowModal(false)
      }
    } else {
      if (title || content || files) {
        if (window.confirm('Add ?')) {
          if (!title) return alert('Not Title')
          //if (!files) return alert('Not File')
          //if (!images) return alert('Not Image')
          if (!content) return alert('Not Content')
          setItems([
            ...items,
            {
              ...selectedItem,
              no: items.length + 1,
            },
          ])
          setShowModal(false)
        }
      } else {
        setShowModal(false)
      }
    }
    setShowModal(false)
  }

  const handleOrderModalOnChange = ({target: {id, value}}) => {
    console.log(id, value)
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  const handleOrderListOnDelete = ({no}) => {
    if (window.confirm('Delete ?')) {
      setItems(items.filter(value => value.no !== no))
    }
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
      setEditMode(true)
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
                <CButton color='primary' onClick={() => handleShowMaterialDetailModal()}>
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
              onDelete={handleOrderListOnDelete}
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
        onDelete={handleOrderOnDelete}
        editMode={editMode}
        setEditMode={setEditMode}
        editor={editor}
        setEditor={setEditor}
      />
    </CRow>
  )
}

export default EducationScheduleList
