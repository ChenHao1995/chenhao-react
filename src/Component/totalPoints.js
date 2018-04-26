import React,{ Component } from 'react'
//import {render} from 'react-dom'
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
//import { createStore } from 'redux'
import {PropTypes} from 'prop-types'
//import AppRouter from './router.js'
//import store from '../store.js'
import * as Actions from '../action.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state){
  return {
    totalValue:state.totalValue
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(action.increaseAction)
//   }
// }
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class TotalPoints extends Component {
  constructor(props){
    super(props)
    //console.log(this.props)
    this.exchangeValue = this.exchangeValue.bind(this)
    
    
  }
  componentDidMount(){
    
    
  }

  exchangeValue(value){
    const { maxvalue } = this.props
    const funValue = String(value).indexOf('.') === -1 ? value : String(value).slice(0,String(value).indexOf('.')+2)
    this.props.actions.totalvalue({
      totalValue:funValue > maxvalue ? maxvalue :funValue
    })
  }



  render(){
    const { totalValue } = this.props
    return(
      <input type='number' min='0' className='input-text'  value={totalValue} onChange={(e)=>{
        this.exchangeValue(e.target.value)
      }} />
    )
  }
}

TotalPoints.propTypes = {
  totalValue:PropTypes.any,
  maxvalue:PropTypes.number,
  totalvalue:PropTypes.any,
  actions:PropTypes.object
}
// const Total = connect(
//   mapStateToProps,
//   actions
// )(TotalPoints)
// export default Total
