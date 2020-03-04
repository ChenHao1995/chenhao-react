import axios from 'axios'
export function uploadSuccess(data) {
  return {
    type: 'UPLOAD_SUCCESS',
    data
  }
}

export function upload(requestData, dispatch, getState) {
  return axios({
    url: 'https://upload.tujia.com/MobileFileUpload.ashx',
    method: 'post',
    data: requestData
  }).then(data => {
    dispatch(uploadSuccess(data.data))
    return data
  })
}

export default {
  upload,
  uploadSuccess
}
