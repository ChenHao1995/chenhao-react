export default function reducer(state,action){
  console.log(state,action)
  switch(action.type){
    case 'TOTAL_VALUE' :
      state.totalValue = action.data.totalValue
      return Object.assign({},state)
    case 'increase':
      
      return { count: action.data.count  }
    default :
      return state
  }

}