"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom"); //Router,hashHistory,
var react_1 = require("react");
//import {Chen} from './demo.js'
var react_redux_1 = require("react-redux");
var store_1 = require("../store");
//import App from '../demo.js'
//import TestComponent from '../test.js'
var react_router_redux_1 = require("react-router-redux");
//import createMemoryHistory from 'history/createMemoryHistory'
//import { browserHistory } from 'react-router'
//路由
// const history = syncHistoryWithStore(browserHistory, store)
// console.debug(history)
//history.listen(location => analyticsService.track(location.pathname))
//const history = createHistory()
// import babelPolyfill from 'babel-polyfill'
var ansycComponent_1 = require("../ansycComponent");
var App = function (props) {
    return (<react_redux_1.Provider store={store_1.default}>
      <react_router_redux_1.ConnectedRouter history={store_1.history}>
        <div>
          <react_router_dom_1.Route exact path="/app/index" component={ansycComponent_1.default(function () { return Promise.resolve().then(function () { return require('../demo.js'); }); })}/>
          <react_router_dom_1.Route exact path="/app/test" component={ansycComponent_1.default(function () { return Promise.resolve().then(function () { return require('../test.js'); }); })}/>
          <react_router_dom_1.Route exact path="/app/async" component={ansycComponent_1.default(function () { return Promise.resolve().then(function () { return require('../demo.js'); }); })}/>
          <react_router_dom_1.Route exact path="/app/drop" component={ansycComponent_1.default(function () { return Promise.resolve().then(function () { return require('../dropTable.tsx'); }); })}/>
        </div>
      </react_router_redux_1.ConnectedRouter>
    </react_redux_1.Provider>);
};
react_dom_1.render(<App />, document.getElementById('root'));
exports.default = App;
