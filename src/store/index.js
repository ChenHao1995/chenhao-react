//import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import  reducer  from './reducer.js'
import Reducer from './reducer'
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
//import { history } from './router'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
let initState = {
  demoreducer: {
    totalValue: '',
    scoreToStartForm: {},
    remarkValue: '',
    checked: false
  }
}
const history = createBrowserHistory()
const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  ...Reducer,
  routing: routerReducer
})
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(sagaMiddleware, middleware, thunk)
)
sagaMiddleware.run(sagas)
export default store
export { history }
