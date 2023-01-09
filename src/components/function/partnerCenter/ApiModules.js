import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {isEmpty} from '../../../utils/utility'
import {EndPoint} from '../../../dataManager/apiMapper'

// get List
export const getListData = async url => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.GET,
      url: url,
    })
    if (!isSuccess || isEmpty(result)) {
      return alert(message)
    }
    if (code === 1000) {
      return result
    } else {
      return alert(message)
    }
  } catch (error) {
    return error
  }
}

// open Modal
export const getDetailInfo = async (url, id) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.GET,
      url: `${url}/${id}`,
    })
    if (!isSuccess || isEmpty(result)) {
      return alert(message)
    }
    if (code === 1000) {
      return result
    } else {
      alert(message)
    }
  } catch (error) {
    return error
  }
}

// Deleted
export const deletedInfo = async (url, id) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.PATCH,
      url: `${url}/${id}`,
    })
    if (!isSuccess || isEmpty(result)) {
      return alert(message)
    }
    if (code === 1000) {
      return message
    } else {
      alert(message)
    }
  } catch (error) {
    return error
  }
}

// upDate
export const upDateInfo = async (url, id, data) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.PUT,
      url: `${url}/${id}`,
      data: data,
    })
    if (!isSuccess || isEmpty(result)) {
      return message
    }
    if (code === 1000) {
      return message
    } else {
      return message
    }
  } catch (error) {
    return error
  }
}

// created
export const createdInfo = async (url, data) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.POST,
      url: url,
      data: data,
    })
    if (!isSuccess || isEmpty(result)) {
      return alert(message)
    }
    if (code === 1000) {
      return message
    } else {
      return message
    }
  } catch (error) {
    return error
  }
}

//  getListData(EndPoint.PARTNER_INACTIVE_USERS)
//       .then(res => {
//         setItems(res?.inActiveUserInfoPartnerDTOs)
//       })
//       .catch(err => console.log(err))

//getDetailInfo(EndPoint.PARTNER_USERS, id)
//       .then(res => {
//         setSelectedItem(res)
//         setShowModal(!showModal)
//       })
//       .catch(err => console.log(err))
