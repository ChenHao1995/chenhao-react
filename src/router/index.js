import { render } from 'react-dom'
import {
  Route,
  BrowserRouter,
  Switch,
  browserHistory,
  Redirect
} from 'react-router-dom' //Router,hashHistory,
import React from 'react'
//import {Chen} from './demo.js'
import { Provider } from 'react-redux'
import store, { history } from '../store'
//import App from '../demo.js'
//import TestComponent from '../test.js'
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware,
  ConnectedRouter
} from 'react-router-redux'
//import createMemoryHistory from 'history/createMemoryHistory'
//import { browserHistory } from 'react-router'
//路由
// const history = syncHistoryWithStore(browserHistory, store)
// console.debug(history)
//history.listen(location => analyticsService.track(location.pathname))
//const history = createHistory()
// import babelPolyfill from 'babel-polyfill'
import { PropTypes } from 'prop-types'
import ansycComponent from '../ansycComponent'
import routerConfig from './config'

const isLogin = true
function WrapRoute(props) {
  return isLogin ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/app/index'
      }}
    />
  )
}

function WrapRoute2(props) {
  const { component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={props => {
        return isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/app/index'
            }}
          />
        )
      }}
    />
  )
}
// WrapRoute2.propTypes = {
//   component: PropTypes.object
// }

const App = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          {/* <Route
            exact
            path="/app/index"
            component={ansycComponent(() => import('../view/StarScore'))}
          /> */}
          {routerConfig.map((value, key) => {
            return (
              <WrapRoute
                key={key}
                exact
                path={value.path}
                component={ansycComponent(value.componentPath)}
              />
            )
          })}
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))

export default App
