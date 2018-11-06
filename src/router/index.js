import {render} from 'react-dom'
import { Route,BrowserRouter,Switch,browserHistory } from 'react-router-dom' //Router,hashHistory,
import React from 'react'
//import {Chen} from './demo.js'
import { Provider } from 'react-redux'
import store,{history} from '../store'
//import App from '../demo.js'
import TestComponent from '../test.js'
import { syncHistoryWithStore, routerReducer,routerMiddleware,ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
//import createMemoryHistory from 'history/createMemoryHistory'
//import { browserHistory } from 'react-router'
//路由
// const history = syncHistoryWithStore(browserHistory, store)
// console.debug(history)
//history.listen(location => analyticsService.track(location.pathname))
//const history = createHistory()
import ansycComponent from '../ansycComponent'


render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/app/index' component={ansycComponent(() => import('../demo.js'))}/>
        <Route exact path='/app/test' component={TestComponent} />
        <Route exact path='/app/async' component={ansycComponent(() => import('../demo.js'))} />
      </div>
    </ConnectedRouter>
  </Provider>
),document.getElementById('root'))