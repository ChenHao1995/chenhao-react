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
var actions_1 = require("./actions");
var react_redux_1 = require("react-redux");
//import  antdstyle  from '../node_modules/antd-mobile/dist/antd-mobile.css';
var antd_mobile_1 = require("antd-mobile");
var totalPoints_js_1 = require("./Component/totalPoints.js");
//import ScoreStart from './Component/scoreToStart.js'
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var create_react_class_1 = require("create-react-class");
//import Api from '../api'
function mapStateToProps(state) {
    console.log('demo', state);
    return {
        totalValue: state.demoreducer.totalValue,
        scoreToStartForm: state.demoreducer.scoreToStartForm,
        remarkValue: state.demoreducer.remarkValue,
        checked: state.demoreducer.checked
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators(actions_1.default, dispatch),
        routerActions: redux_1.bindActionCreators(react_router_redux_1.routerActions, dispatch)
    };
}
var Demo = /** @class */ (function (_super) {
    __extends(Demo, _super);
    function Demo(props) {
        var _this = _super.call(this, props) || this;
        _this.ScoreStartAsync = function () {
            return new Promise(function (resolve, reject) {
                require.ensure([], function (require) {
                    var result = require('./Component/scoreToStart.js');
                    console.log(result.default, 'ScoreStartAsync组件');
                    resolve(result.default);
                });
            });
        };
        _this.onhref = function () {
            var routerActions = _this.props.routerActions;
            //console.log(routerActions.go)
            routerActions.push('/app/test');
            console.log(react_router_redux_1.push);
            //store.dispatch(push('/test'))
        };
        _this.remarkChange = _this.remarkChange.bind(_this);
        _this.submit = _this.submit.bind(_this);
        _this.recommendChange = _this.recommendChange.bind(_this);
        console.log(_this.props);
        _this.state = {
            ScoreStart: create_react_class_1.default({
                render: function () {
                    return <div>初始化</div>;
                }
            })
        };
        return _this;
    }
    Demo.prototype.componentDidMount = function () {
        var _this = this;
        //console.log(PropTypes)
        // Api({
        //   path: '/xiaonei-api/innnernet/application/check',
        //   method: 'POST'
        // })
        //异步加载组件
        this.ScoreStartAsync().then(function (data) {
            _this.setState({
                ScoreStart: data
            });
        });
    };
    Demo.prototype.remarkChange = function (value) {
        this.props.actions.remark({
            remarkValue: value
        });
    };
    Demo.prototype.recommendChange = function (value) {
        this.props.actions.recommend({
            checked: value
        });
    };
    Demo.prototype.submit = function () {
        console.log(prop_types_1.PropTypes);
        var _a = this.props, totalValue = _a.totalValue, scoreToStartForm = _a.scoreToStartForm, remarkValue = _a.remarkValue;
        if (totalValue == '') {
            alert('请填写评分');
            return;
        }
        if (remarkValue == '') {
            alert('请填写评语');
            return;
        }
        if (remarkValue == '') {
            alert('请填写评语');
            return;
        }
        if (scoreToStartForm[0].value == '') {
            alert('请给语言打分');
            return;
        }
        if (scoreToStartForm[1].value == '') {
            alert('请给文字打分');
            return;
        }
        if (scoreToStartForm[2].value == '') {
            alert('请给声音打分');
            return;
        }
        if (scoreToStartForm[3].value == '') {
            alert('请给速度打分');
            return;
        }
        if (scoreToStartForm[4].value == '') {
            alert('请给想不出了打分');
            return;
        }
        var result = {};
        result.score = totalValue;
        result.remark = remarkValue;
        Object.assign(result, scoreToStartForm);
        console.log(result, this.props);
    };
    Demo.prototype.render = function () {
        var _this = this;
        var ScoreStart = this.state.ScoreStart;
        console.log(this.props);
        var checked = this.props.checked;
        var dataArray = [
            {
                stsTitle: '语言',
                stsDetail: '描述性文字1'
            },
            {
                stsTitle: '文字',
                stsDetail: '描述性文字2'
            },
            {
                stsTitle: '声音',
                stsDetail: '描述性文字3'
            },
            {
                stsTitle: '速度',
                stsDetail: '描述性文字4'
            },
            {
                stsTitle: '想不出了',
                stsDetail: '描述性文字5'
            }
        ];
        return (<div className="demo-container">
        <div className="container1">
          <span>评分</span>
          <totalPoints_js_1.default maxvalue={15}/>
          <span>分值（15分）</span>
        </div>
        {dataArray.map(function (value, index, array) {
            return (<ScoreStart propkey={String(index)} stsTitle={value.stsTitle} stsDetail={value.stsDetail} key={index}/>);
        })}
        <div className="remark-box">
          <div className="remark">评语</div>
          <div className="t-box">
            <textarea className="textarea" onChange={function (e) {
            _this.remarkChange(e.target.value);
        }}/>
          </div>
        </div>
        <div>
          <span>推荐</span>
          <antd_mobile_1.Switch checked={checked} onChange={function (e) {
            _this.recommendChange(!checked);
        }}/>
        </div>

        <button className="button" onClick={function (e) {
            e.preventDefault();
            _this.submit();
        }}>
          提交
        </button>

        <button onClick={this.onhref}>跳转</button>
        {this.props.children}
      </div>);
    };
    Demo = __decorate([
        react_redux_1.connect(mapStateToProps, mapDispatchToProps)
    ], Demo);
    return Demo;
}(react_1.Component));
exports.default = Demo;
Demo.propTypes = {
    remark: prop_types_1.PropTypes.any,
    recommend: prop_types_1.PropTypes.any,
    totalValue: prop_types_1.PropTypes.any,
    scoreToStartForm: prop_types_1.PropTypes.any,
    remarkValue: prop_types_1.PropTypes.any,
    checked: prop_types_1.PropTypes.any,
    children: prop_types_1.PropTypes.any,
    actions: prop_types_1.PropTypes.object,
    routerActions: prop_types_1.PropTypes.object
};
