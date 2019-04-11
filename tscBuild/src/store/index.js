"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Provider } from 'react-redux'
var redux_1 = require("redux");
//import  reducer  from './reducer.js'
var reducer_1 = require("../reducer");
var react_router_redux_1 = require("react-router-redux");
//import { history } from './router'
var createBrowserHistory_1 = require("history/createBrowserHistory");
var redux_saga_1 = require("redux-saga");
var sagas_1 = require("../sagas");
var initState = {
    demoreducer: {
        totalValue: '',
        scoreToStartForm: {},
        remarkValue: '',
        checked: false
    }
};
var history = createBrowserHistory_1.default();
exports.history = history;
var middleware = react_router_redux_1.routerMiddleware(history);
var sagaMiddleware = redux_saga_1.default();
var rootReducer = redux_1.combineReducers(__assign({}, reducer_1.default, { routing: react_router_redux_1.routerReducer }));
var store = redux_1.createStore(rootReducer, initState, redux_1.applyMiddleware(sagaMiddleware, middleware));
sagaMiddleware.run(sagas_1.default);
exports.default = store;
