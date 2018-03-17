import {render} from 'react-dom';
import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
import React from 'react'
import {Chen} from './demo.js'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './demo.js'
//路由
render((
  <Provider store={store}>
	  <BrowserRouter>
	    <Switch>
	      <Route path='/chen' component={App} />
	    </Switch>
	  </BrowserRouter>
  </Provider>
),document.getElementById('root'))


