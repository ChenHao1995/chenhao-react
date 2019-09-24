import React, { Component } from 'react'
//import {render} from 'react-dom'
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
//import { createStore } from 'redux'
import { PropTypes } from 'prop-types'
//import AppRouter from './router.js'
//import store from './store.js'
import Actions from './actions'
import { connect } from 'react-redux'
//import democss from '../css/demo.css'
import flexible from '../js/index.min.js'
import { bindActionCreators } from 'redux'
// import Highcharts from 'highcharts/highstock'
// import HighchartsMore from 'highcharts/highcharts-more'
// import HighchartsDrilldown from 'highcharts/modules/drilldown'
// import Highcharts3D from 'highcharts/highcharts-3d'
import { routerActions } from 'react-router-redux'
import axios from 'axios'

//import ScoreStart from './Component/scoreToStart.js'

// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts)
// Highcharts3D(Highcharts)

//import * as Highcharts from 'highcharts'
// import * as Exporting from 'highcharts/modules/exporting'
//Exporting(Highcharts)
//import  antdstyle  from '../node_modules/antd-mobile/dist/antd-mobile.css';
function mapStateToProps(state) {
  return {}
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(action.increaseAction)
//   }
// }
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch)
  }
}
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Test extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    //this.props.routerActions.push('/chen')
  }

  fakeRequest = () =>{
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        return resolve({data:'chenhao'})
      },5000)
    })
  }
  componentDidMount() {
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
  }

  render() {
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
    const props = this.props
    return (
      <div>
        <div id="map" style={{ width: 800, height: 500 }}>
          这是一个test
        </div>
        <button onClick={() => {
          console.log(this)
          // this.fakeRequest().then((data) =>{
          //   console.log(data)
          // })
          props.actions.request({chenhao:1}).then((data) =>{
            console.log(data)
          })

        }}>测试redux-thunk</button>
        <div id="container" style={{ width: 800, height: 500 }} />
        <button
          onClick={() => {
            props.routerActions.goBack()
          }}
        >
          back
        </button>
        {/*
          dataArray.map(function(value,index,array){
            return <ScoreStart propkey={String(index)} stsTitle={value.stsTitle} stsDetail={value.stsDetail} key={index} />
          })
        */}
      </div>
    )
  }
}

Test.propTypes = {
  routerActions: PropTypes.any
}
// const TestComponent = connect(
//   mapStateToProps,
//   actions
// )(Test)
// export default TestComponent
