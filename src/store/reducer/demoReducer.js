import immutable, { fromJS } from 'immutable'
import { deepMerge } from '@src/util'

export default function demoReducer(state = {}, action) {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'TOTAL_VALUE':
      // state.totalValue = action.data.totalValue
      // return Object.assign({}, state)
      return deepMerge(state, action.data)
    case 'STS_INITVALUE':
      // Object.assign(state.scoreToStartForm, action.data)
      //  return Object.assign({}, JSON.parse(JSON.stringify(state)))
      return deepMerge(state, { scoreToStartForm: action.data })
    case 'STS_VALUE':
      // Object.assign(state.scoreToStartForm, action.data)
      // return Object.assign({}, JSON.parse(JSON.stringify(state)))
      return deepMerge(state, { scoreToStartForm: action.data })
    case 'REMARK_VALUE':
      // state.remarkValue = action.data.remarkValue
      // return Object.assign({}, JSON.parse(JSON.stringify(state)))
      return deepMerge(state, action.data)
    case 'RECOMMEND_VALUE':
      // state.checked = action.data.checked
      // return Object.assign({}, state)
      return deepMerge(state, action.data)
    default:
      return state
  }
}
