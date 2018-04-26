//import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
//import  reducer  from './reducer.js'
import demoreducer from './reducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
let initState = {
  totalValue:'',
  scoreToStartForm:{},
  remarkValue:'',
  checked:false
}

console.log(demoreducer)
const rootReducer= combineReducers({
  demoreducer
  //routing: routerReducer
})
const store = createStore(rootReducer,initState)
export default store