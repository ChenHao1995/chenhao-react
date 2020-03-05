import immutable, { fromJS } from 'immutable'
import { deepMerge } from '@src/util'

export default function tujiaReducer(state = {}, action) {
  console.log('tujiaReducer', state, action)
  switch (action.type) {
    case 'UPLOAD_SUCCESS':
      if (
        Object.prototype.toString.call(action.data.msg) === '[object Object]'
      ) {
        const { urlList = [] } = state
        const url = action.data.msg.url
        urlList.push({
          completeUrl: 'https://pic.tujia.com/' + url,
          url
        })
        return deepMerge(state, {
          tujiaUploadData: action.data,
          urlList
        })
      }
      console.log(action.data.msg.url)

    default:
      return state
  }
}
