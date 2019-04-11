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
        scoreToStartForm: state.demoreducer.scoreToStartForm
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators(actions_1.default, dispatch)
    };
}
var ScoreToStart = /** @class */ (function (_super) {
    __extends(ScoreToStart, _super);
    function ScoreToStart(props) {
        var _this = _super.call(this, props) || this;
        console.log('scoreToStart', _this.props);
        _this.exchangeValue = _this.exchangeValue.bind(_this);
        _this.getStart = _this.getStart.bind(_this);
        return _this;
    }
    ScoreToStart.prototype.componentWillMount = function () {
        var _a;
        var propkey = this.props.propkey;
        this.props.actions.scoreToStartInitValue((_a = {},
            _a[propkey] = {
                value: '',
                startCount: 0
            },
            _a));
    };
    ScoreToStart.prototype.componentDidMount = function () {
    };
    ScoreToStart.prototype.exchangeValue = function (value) {
        var _a;
        var propkey = this.props.propkey;
        var funValue = String(value).indexOf('.') === -1 ? value : String(value).slice(0, String(value).indexOf('.'));
        var initValue = funValue > 100 ? 100 : funValue;
        var startCount = this.getStart(Number(initValue));
        this.props.actions.scoreToStartValue((_a = {},
            _a[propkey] = {
                value: initValue,
                startCount: startCount
            },
            _a));
    };
    ScoreToStart.prototype.getStart = function (score) {
        var scoreArray = [
            { from: 0,
                to: 0.4,
                startCount: 0
            },
            {
                from: 0.5,
                to: 10.4,
                startCount: 0.5
            },
            {
                from: 10.5,
                to: 20.4,
                startCount: 1
            },
            {
                from: 20.5,
                to: 30.4,
                startCount: 1.5
            },
            {
                from: 30.5,
                to: 40.4,
                startCount: 2
            },
            {
                from: 40.5,
                to: 50.4,
                startCount: 2.5
            },
            {
                from: 5.5,
                to: 60.4,
                startCount: 3
            },
            {
                from: 60.5,
                to: 70.4,
                startCount: 3.5
            },
            {
                from: 70.5,
                to: 80.4,
                startCount: 4
            },
            {
                from: 80.5,
                to: 90.4,
                startCount: 4.5
            },
            {
                from: 90.5,
                startCount: 5
            }
        ];
        var result = scoreArray.filter(function (value) {
            if (!value.to) {
                return true;
            }
            if (score >= value.from && score <= value.to) {
                return true;
            }
        });
        console.log(result);
        return result[0].startCount;
    };
    ScoreToStart.prototype.render = function () {
        var _this = this;
        var _a = this.props, propkey = _a.propkey, stsDetail = _a.stsDetail, stsTitle = _a.stsTitle;
        var scoreValue = this.props.scoreToStartForm ? (this.props.scoreToStartForm[propkey] ? this.props.scoreToStartForm[propkey].value : '') : '';
        var startCount = this.props.scoreToStartForm ? (this.props.scoreToStartForm[propkey] ? this.props.scoreToStartForm[propkey].startCount : '') : '';
        return (<div className='score-component'>
        <div className='score-title'>
          <span>{stsTitle}</span><input type='number' value={scoreValue} onChange={function (e) {
            _this.exchangeValue(e.target.value);
        }}/><span>%</span>
        </div>
        <div className='score-box'>
          <div className='start-box'>
            <div className={startCount >= 0.5 ? (startCount >= 1 ? 'start-l cf' : 'start-yb cf') : 'start cf'}>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(10);
        }}>
              </div>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(20);
        }}>
              </div>
            </div>
            <div className={startCount >= 1.5 ? (startCount >= 2 ? 'start-l cf' : 'start-yb cf') : 'start cf'}>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(30);
        }}>
              </div>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(40);
        }}>
              </div>
            </div>
            <div className={startCount >= 2.5 ? (startCount >= 3 ? 'start-l cf' : 'start-yb cf') : 'start cf'}>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(50);
        }}>
              </div>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(60);
        }}>
              </div>
            </div>
            <div className={startCount >= 3.5 ? (startCount >= 4 ? 'start-l cf' : 'start-yb cf') : 'start cf'}>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(70);
        }}>
              </div>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(80);
        }}>
              </div>
            </div>
            <div className={startCount >= 4.5 ? (startCount >= 5 ? 'start-l cf' : 'start-yb cf') : 'start cf'}>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(90);
        }}>
              </div>
              <div className='start-click' onClick={function (e) {
            _this.exchangeValue(100);
        }}>
              </div>
            </div>
          </div>
          <div className='choose-detail'>
            {stsDetail}
          </div>
        </div>
      </div>);
    };
    ScoreToStart = __decorate([
        react_redux_1.connect(mapStateToProps, mapDispatchToProps)
    ], ScoreToStart);
    return ScoreToStart;
}(react_1.Component));
exports.default = ScoreToStart;
ScoreToStart.propTypes = {
    propkey: prop_types_1.PropTypes.string.isRequired,
    scoreToStartInitValue: prop_types_1.PropTypes.any,
    scoreToStartValue: prop_types_1.PropTypes.any,
    stsDetail: prop_types_1.PropTypes.any,
    stsTitle: prop_types_1.PropTypes.any,
    scoreToStartForm: prop_types_1.PropTypes.any,
    actions: prop_types_1.PropTypes.object
};
