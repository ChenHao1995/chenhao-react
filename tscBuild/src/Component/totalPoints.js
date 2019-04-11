"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
//import {render} from 'react-dom'
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
//import { createStore } from 'redux'
var prop_types_1 = require("prop-types");
//import AppRouter from './router.js'
//import store from '../store.js'
var actions_1 = require("../actions");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
function mapStateToProps(state) {
    return {
        totalValue: state.demoreducer.totalValue
    };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(action.increaseAction)
//   }
// }
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators(actions_1.default, dispatch)
    };
}
var TotalPoints = /** @class */ (function (_super) {
    __extends(TotalPoints, _super);
    function TotalPoints(props) {
        var _this = _super.call(this, props) || this;
        //console.log(this.props)
        _this.exchangeValue = _this.exchangeValue.bind(_this);
        return _this;
    }
    TotalPoints.prototype.componentDidMount = function () {
    };
    TotalPoints.prototype.exchangeValue = function (value) {
        var maxvalue = this.props.maxvalue;
        var funValue = String(value).indexOf('.') === -1 ? value : String(value).slice(0, String(value).indexOf('.') + 2);
        this.props.actions.totalvalue({
            totalValue: funValue > maxvalue ? maxvalue : funValue
        });
    };
    TotalPoints.prototype.render = function () {
        var _this = this;
        var totalValue = this.props.totalValue;
        return (<input type='number' min='0' className='input-text' value={totalValue} onChange={function (e) {
            _this.exchangeValue(e.target.value);
        }}/>);
    };
    TotalPoints = __decorate([
        react_redux_1.connect(mapStateToProps, mapDispatchToProps)
    ], TotalPoints);
    return TotalPoints;
}(react_1.Component));
exports.default = TotalPoints;
TotalPoints.propTypes = {
    totalValue: prop_types_1.PropTypes.any,
    maxvalue: prop_types_1.PropTypes.number,
    totalvalue: prop_types_1.PropTypes.any,
    actions: prop_types_1.PropTypes.object
};
// const Total = connect(
//   mapStateToProps,
//   actions
// )(TotalPoints)
// export default Total
