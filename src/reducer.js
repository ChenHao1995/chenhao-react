export default function reducer(state,action){
  console.log(state,action)
  switch(action.type){
    case 'TOTAL_VALUE' :
      state.totalValue = action.data.totalValue
      return Object.assign({},state)
    case 'STS_INITVALUE':
      Object.assign(state.scoreToStartForm,action.data)
      return Object.assign({},JSON.parse(JSON.stringify(state)))
    case 'STS_VALUE':
      Object.assign(state.scoreToStartForm,action.data)
      return Object.assign({},JSON.parse(JSON.stringify(state)))
    case 'REMARK_VALUE':
      state.remarkValue = action.data.remarkValue
      return Object.assign({},JSON.parse(JSON.stringify(state)))
    default :
      return state
  }

}