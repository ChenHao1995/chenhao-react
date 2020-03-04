import immutable, { fromJS } from 'immutable'
import { deepMerge } from '@src/util'

export default function tujiaReducer(state = {}, action) {
  console.log('tujiaReducer', state, action)
  switch (action.type) {
    case 'UPLOAD_SUCCESS':
      return deepMerge(state, { tujiaUploadData: action.data })
    default:
      return state
  }
}
