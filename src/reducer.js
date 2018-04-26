export default function demoReducer(state={},action){
  console.log(state,action)
  switch(action.type){
    case 'TOTAL_VALUE' :
      state.totalValue && (state.totalValue = action.data.totalValue)
      return Object.assign({},state)
    case 'STS_INITVALUE':
      state.scoreToStartForm && action.data && Object.assign(state.scoreToStartForm,action.data)
      return Object.assign({},JSON.parse(JSON.stringify(state)))
    case 'STS_VALUE':
      state.scoreToStartForm && Object.assign(state.scoreToStartForm,action.data)
      return Object.assign({},JSON.parse(JSON.stringify(state)))
    case 'REMARK_VALUE':
      state.remarkValue && (state.remarkValue = action.data.remarkValue)
      return Object.assign({},JSON.parse(JSON.stringify(state)))
    case 'RECOMMEND_VALUE':
      state.checked && (state.checked = action.data.checked)
      return Object.assign({},state)
    default :
      return state
  }
}