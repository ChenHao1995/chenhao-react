import React,{ Component } from 'react'
import {render} from 'react-dom';
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
import { createStore } from 'redux'
import {PropTypes} from 'prop-types'
//import AppRouter from './router.js'
import store from './store.js'
import * as actions from './action.js'
import { connect } from 'react-redux'
import democss from '../css/demo.css'
import flexible from '../js/index.min.js'

//import  antdstyle  from '../node_modules/antd-mobile/dist/antd-mobile.css';
function mapStateToProps(state){
  return {
    
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(action.increaseAction)
//   }
// }

class Test extends Component {
  constructor(props){
    super(props)
    
    
    
  }
  componentDidMount(){
    
    
  }

  
  
  

  render(){
    return (
      <div>
        hahah
      </div>
    )
  }
}

Test.propTypes = {
 
  
}
const TestComponent = connect(
  mapStateToProps,
  actions
)(Test)
export default TestComponent


