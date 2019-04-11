"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom"); //Router,hashHistory,
var react_1 = require("react");
var demo_js_1 = require("../demo.js");
var react_redux_1 = require("react-redux");
var store_1 = require("../store");
//import App from '../demo.js'
var test_js_1 = require("../test.js");
var react_router_redux_1 = require("react-router-redux");
var App = function (props) {
    return (<react_redux_1.Provider store={store_1.default}>
      <react_router_redux_1.ConnectedRouter history={store_1.history}>
        <div>
          <react_router_dom_1.Route exact path="/app/index" component={demo_js_1.default}/>
          <react_router_dom_1.Route exact path="/app/test" component={test_js_1.default}/>
          <react_router_dom_1.Route exact path="/app/async" component={demo_js_1.default}/>
        </div>
      </react_router_redux_1.ConnectedRouter>
    </react_redux_1.Provider>);
};
react_dom_1.render(<App />, document.getElementById("root"));
exports.default = App;
