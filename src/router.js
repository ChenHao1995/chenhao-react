import {render} from 'react-dom'
import { Route,BrowserRouter,Switch,browserHistory } from 'react-router-dom' //Router,hashHistory,
import React from 'react'
//import {Chen} from './demo.js'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './demo.js'
import TestComponent from './test.js'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//import { browserHistory } from 'react-router'
//路由
const history = syncHistoryWithStore(browserHistory, store)
console.debug(history)
history.listen(location => analyticsService.track(location.pathname))
render((
  <Provider store={store}>
    <BrowserRouter>
	  <Switch>
	    <Route path='/chen' component={App}/>
	    <Route path='/test' component={TestComponent} />
        
	  </Switch>
    </BrowserRouter>
  </Provider>
),document.getElementById('root'))


