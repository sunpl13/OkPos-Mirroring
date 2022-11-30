//url 리스트를 보낼 때 커스텀 해주는 함수
export const sendImageUrlFormat = array => {
  return array.map(item => {
    return item.url.split('.com/')[1]
  })
}

export const returnBucketName = imgPath => {
  return `${process.env.REACT_APP_AWS_BUCKET_NAME}/admin/images/${imgPath}`
}

export const antdImageFormat = path => {
  return `https://${process.env.REACT_APP_AWS_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${path}`
}

export const returnBucketNameFile = imgPath => {
  return `${process.env.REACT_APP_AWS_BUCKET_NAME}/admin/files/${imgPath}`
}
