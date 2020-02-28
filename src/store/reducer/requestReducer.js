import immutable, { fromJS } from 'immutable'
import { deepMerge } from '@src/util'

export default function requestReducer(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_SUCCESS':
      console.log('REQUEST_SUCCESS')
      return deepMerge(state, action.data)
    default:
      return state
  }
}
