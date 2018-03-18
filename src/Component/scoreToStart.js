import React,{ Component } from 'react'
import {render} from 'react-dom';
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
import { createStore } from 'redux'
import {PropTypes} from 'prop-types'
//import AppRouter from './router.js'
import store from '../store.js'
import * as actions from '../action.js'
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(action.increaseAction)
//   }
// }

class ScoreToStart extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    
    
    
  }
  componentDidMount(){
    
    
  }

  exchangeValue(){
    
  }

  



  render(){
    
    return(
      <div className='score-component'>
        <div className='score-title'>
          <span>语言</span> <input type='text' /> <span>%</span>
        </div>
        <div className='score-box'>
          <div className='start-box' >
            <div className='start cf'>
               <div className='start-click'>
               </div>
               <div className='start-click'>
               </div>
            </div>
            <div className='start-l cf'>

            </div>
            <div className='start-yb cf'>

            </div>
          </div>
          <div className='choose-detail'>
            流畅度，准确性和复杂度
          </div>
        </div>
      </div>
      
    )
  }
}

ScoreToStart.propTypes = {
  
}
const ScoreStart = connect(
  mapStateToProps,
  actions
)(ScoreToStart)
export default ScoreStart
