import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  reducer  from './reducer.js'


const store = createStore(reducer,{
  totalValue:"",
  scoreToStartForm:{},
  remarkValue:''
})
export default store