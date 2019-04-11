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
//import store from './store.js'
var actions_1 = require("./actions");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
// import Highcharts from 'highcharts/highstock'
// import HighchartsMore from 'highcharts/highcharts-more'
// import HighchartsDrilldown from 'highcharts/modules/drilldown'
// import Highcharts3D from 'highcharts/highcharts-3d'
var react_router_redux_1 = require("react-router-redux");
//import ScoreStart from './Component/scoreToStart.js'
// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts)
// Highcharts3D(Highcharts)
//import * as Highcharts from 'highcharts'
// import * as Exporting from 'highcharts/modules/exporting'
//Exporting(Highcharts)
//import  antdstyle  from '../node_modules/antd-mobile/dist/antd-mobile.css';
function mapStateToProps(state) {
    return {};
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(action.increaseAction)
//   }
// }
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators(actions_1.default, dispatch),
        routerActions: redux_1.bindActionCreators(react_router_redux_1.routerActions, dispatch)
    };
}
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test(props) {
        var _this = _super.call(this, props) || this;
        console.log(props);
        return _this;
        //this.props.routerActions.push('/chen')
    }
    Test.prototype.componentDidMount = function () {
        // console.log(
        //   import('./Component/scoreToStart.js').then(function(data) {
        //     console.log(data)
        //   })
        // )
        // var options = {
        //   chart: {
        //     type: 'column',
        //     style:{
        //       color:'#991234'
        //     },
        //     inverted: false
        //   },
        //   title: {
        //     text: '一个图表'
        //   },
        //   xAxis: {
        //     categories: ['Apples', 'Bananas', 'Oranges']
        //   },
        //   yAxis: {
        //     title: {
        //       text: 'Fruit eaten'
        //     }
        //   },
        //   series: [{
        //     name: 'Jane',
        //     data: [1, 1, 4]
        //   }, {
        //     name: 'John',
        //     data: [5, 7, 3]
        //   }]
        // }
        //var chart = Highcharts.chart('container', options)
    };
    Test.prototype.render = function () {
        // const dataArray = [
        //   {
        //     stsTitle: '语言',
        //     stsDetail: '描述性文字1'
        //   },
        //   {
        //     stsTitle: '文字',
        //     stsDetail: '描述性文字2'
        //   },
        //   {
        //     stsTitle: '声音',
        //     stsDetail: '描述性文字3'
        //   },
        //   {
        //     stsTitle: '速度',
        //     stsDetail: '描述性文字4'
        //   },
        //   {
        //     stsTitle: '想不出了',
        //     stsDetail: '描述性文字5'
        //   }
        // ]
        var props = this.props;
        return (<div>
        <div id="map" style={{ width: 800, height: 500 }}>
          这是一个test
        </div>
        <div id="container" style={{ width: 800, height: 500 }}/>
        <button onClick={function () {
            props.routerActions.goBack();
        }}>
          back
        </button>
        
      </div>);
    };
    Test = __decorate([
        react_redux_1.connect(mapStateToProps, mapDispatchToProps)
    ], Test);
    return Test;
}(react_1.Component));
exports.default = Test;
Test.propTypes = {
    routerActions: prop_types_1.PropTypes.any
};
// const TestComponent = connect(
//   mapStateToProps,
//   actions
// )(Test)
// export default TestComponent
