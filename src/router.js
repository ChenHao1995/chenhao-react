import {render} from 'react-dom'
import { Route,BrowserRouter,Switch } from 'react-router-dom' //Router,hashHistory,
import React from 'react'
//import {Chen} from './demo.js'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './demo.js'
import TestComponent from './test.js'
//路由
render((
  <Provider store={store}>
	  <BrowserRouter>
	    <Switch>
	      <Route path='/chen' component={App} />
        <Route path='/test' component={TestComponent} />
	    </Switch>
	  </BrowserRouter>
  </Provider>
),document.getElementById('root'))


