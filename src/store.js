//import { Provider } from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux'
//import  reducer  from './reducer.js'
import demoreducer from './reducer'
import { syncHistoryWithStore, routerReducer,routerMiddleware } from 'react-router-redux'
import { middleWare } from './router'
let initState = {
  demoreducer:{
    totalValue:'',
    scoreToStartForm:{},
    remarkValue:'',
    checked:false
  }
}
const history = createHistory()
const middleware = routerMiddleware(history)
 


const rootReducer= combineReducers({
  demoreducer,
  routing: routerReducer
})
const store = createStore(rootReducer,applyMiddleware(middleware),initState)
export default store