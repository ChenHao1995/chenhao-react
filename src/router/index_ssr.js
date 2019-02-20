import { render } from "react-dom";
import { Route, BrowserRouter, Switch, browserHistory } from "react-router-dom"; //Router,hashHistory,
import React from "react";
import Demo from "../demo.js";
import { Provider } from "react-redux";
import store, { history } from "../store";
//import App from '../demo.js'
import TestComponent from "../test.js";
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware,
  ConnectedRouter
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
//import createMemoryHistory from 'history/createMemoryHistory'
//import { browserHistory } from 'react-router'
//路由
// const history = syncHistoryWithStore(browserHistory, store)
// console.debug(history)
//history.listen(location => analyticsService.track(location.pathname))
//const history = createHistory()
// import babelPolyfill from 'babel-polyfill'
import ansycComponent from "../ansycComponent";

const App = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/app/index" component={Demo} />
          <Route exact path="/app/test" component={TestComponent} />
          <Route exact path="/app/async" component={Demo} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));

export default App;
