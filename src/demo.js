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

import Total from './Component/totalPoints.js'
import ScoreStart from './Component/scoreToStart.js'
function mapStateToProps(state){
  return {
    
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(action.increaseAction)
//   }
// }

class Demo extends Component {
  constructor(props){
    super(props)
    this.click = this.click.bind(this)
    
  }
  componentDidMount(){
    console.log(PropTypes)
    
  }

  click(){





  }
  
  render(){
    return(
      <div className='demo-container'  >

        <div className='container1'>
          <span>评分</span><Total maxvalue={15} /><span>分值（15分）</span>
        </div>
        <ScoreStart/>
        
        <div className='remark-box' >
          <div className='remark'>
            评语
          </div>
          <div className='t-box'>
            <textarea className='textarea' >
            </textarea>
          </div>
        </div>

        <button className='button'>
          提交
        </button>
      </div> 
    )
  }
}

Demo.propTypes = {
 
  
}
const App = connect(
  mapStateToProps,
  actions
)(Demo)
export default App


