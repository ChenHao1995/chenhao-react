import React, { Component } from 'react'
//import {render} from 'react-dom'
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
//import { createStore } from 'redux'
import { PropTypes } from 'prop-types'
//import AppRouter from './router.js'
//import store from '../store.js'
import Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    scoreToStartForm: state.demoreducer.scoreToStartForm
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class ScoreToStart extends Component {
  constructor(props) {
    super(props)
    console.log('scoreToStart', this.props)
    this.exchangeValue = this.exchangeValue.bind(this)
    this.getStart = this.getStart.bind(this)
  }
  UNSAFE_componentWillMount() {
    const propkey = this.props.propkey
    this.props.actions.scoreToStartInitValue({
      [propkey]: {
        value: '',
        startCount: 0
      }
    })
  }

  componentDidMount() {}

  exchangeValue(value) {
    const { propkey } = this.props
    const funValue =
      String(value).indexOf('.') === -1
        ? value
        : String(value).slice(0, String(value).indexOf('.'))
    const initValue = funValue > 100 ? 100 : funValue
    const startCount = this.getStart(Number(initValue))
    this.props.actions.scoreToStartValue({
      [propkey]: {
        value: initValue,
        startCount: startCount
      }
    })
  }

  getStart(score) {
    const scoreArray = [
      { from: 0, to: 0.4, startCount: 0 },
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
    ]

    const result = scoreArray.filter(function(value) {
      if (!value.to) {
        return true
      }
      if (score >= value.from && score <= value.to) {
        return true
      }
    })
    console.log(result)
    return result[0].startCount
  }

  render() {
    const { propkey, stsDetail, stsTitle } = this.props
    const scoreValue = this.props.scoreToStartForm
      ? this.props.scoreToStartForm[propkey]
        ? this.props.scoreToStartForm[propkey].value
        : ''
      : ''
    const startCount = this.props.scoreToStartForm
      ? this.props.scoreToStartForm[propkey]
        ? this.props.scoreToStartForm[propkey].startCount
        : ''
      : ''
    return (
      <div className="score-component">
        <div className="score-title">
          <span>{stsTitle}</span>
          <input
            type="number"
            value={scoreValue}
            onChange={e => {
              this.exchangeValue(e.target.value)
            }}
          />
          <span>%</span>
        </div>
        <div className="score-box">
          <div className="start-box">
            <div
              className={
                startCount >= 0.5
                  ? startCount >= 1
                    ? 'start-l cf'
                    : 'start-yb cf'
                  : 'start cf'
              }
            >
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(10)
                }}
              />
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(20)
                }}
              />
            </div>
            <div
              className={
                startCount >= 1.5
                  ? startCount >= 2
                    ? 'start-l cf'
                    : 'start-yb cf'
                  : 'start cf'
              }
            >
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(30)
                }}
              />
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(40)
                }}
              />
            </div>
            <div
              className={
                startCount >= 2.5
                  ? startCount >= 3
                    ? 'start-l cf'
                    : 'start-yb cf'
                  : 'start cf'
              }
            >
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(50)
                }}
              />
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(60)
                }}
              />
            </div>
            <div
              className={
                startCount >= 3.5
                  ? startCount >= 4
                    ? 'start-l cf'
                    : 'start-yb cf'
                  : 'start cf'
              }
            >
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(70)
                }}
              />
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(80)
                }}
              />
            </div>
            <div
              className={
                startCount >= 4.5
                  ? startCount >= 5
                    ? 'start-l cf'
                    : 'start-yb cf'
                  : 'start cf'
              }
            >
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(90)
                }}
              />
              <div
                className="start-click"
                onClick={e => {
                  this.exchangeValue(100)
                }}
              />
            </div>
          </div>
          <div className="choose-detail">{stsDetail}</div>
        </div>
      </div>
    )
  }
}

ScoreToStart.propTypes = {
  propkey: PropTypes.string.isRequired,
  scoreToStartInitValue: PropTypes.any,
  scoreToStartValue: PropTypes.any,
  stsDetail: PropTypes.any,
  stsTitle: PropTypes.any,
  scoreToStartForm: PropTypes.any,
  actions: PropTypes.object
}
