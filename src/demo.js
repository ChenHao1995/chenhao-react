import React,{ Component } from 'react'
//import {render} from 'react-dom'
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
//import { createStore } from 'redux'
import {PropTypes} from 'prop-types'
//import AppRouter from './router.js'
import store from './store'
import Actions from './actions'
import { connect } from 'react-redux'
import democss from '../css/demo.css'
import flexible from '../js/index.min.js'
//import  antdstyle  from '../node_modules/antd-mobile/dist/antd-mobile.css';
import { Switch } from 'antd-mobile'
import Total from './Component/totalPoints.js'
import ScoreStart from './Component/scoreToStart.js'
import { bindActionCreators } from 'redux'
import {routerActions,push} from 'react-router-redux'
//import Api from '../api'

function mapStateToProps(state){
  console.log('demo',state)
  return {
    totalValue:state.demoreducer.totalValue,
    scoreToStartForm:state.demoreducer.scoreToStartForm,
    remarkValue:state.demoreducer.remarkValue,
    checked:state.demoreducer.checked
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch)
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class Demo extends Component {
  constructor(props){
    super(props)
    this.remarkChange = this.remarkChange.bind(this)
    this.submit = this.submit.bind(this)
    this.recommendChange = this.recommendChange.bind(this)
    console.log(this.props)
    
    
  }
  componentDidMount(){
    console.log(PropTypes)
    // Api({
    //   path: '/xiaonei-api/innnernet/application/check',
    //   method: 'POST'
    // })
    
  }

  remarkChange(value){
    this.props.actions.remark({
      remarkValue:value
    })
  }

  recommendChange(value){
    this.props.actions.recommend({
      checked:value
    })
  }
  
  submit(){
    console.log(PropTypes)
    const { totalValue,scoreToStartForm,remarkValue } = this.props
    if(totalValue == ''){
      alert('请填写评分')
      return 
    }
    if(remarkValue == ''){
      alert('请填写评语')
      return
    }
    if(remarkValue == ''){
      alert('请填写评语')
      return
    }
    if(scoreToStartForm[0].value == ''){
      alert('请给语言打分')
      return
    }
    if(scoreToStartForm[1].value == ''){
      alert('请给文字打分')
      return
    }
    if(scoreToStartForm[2].value == ''){
      alert('请给声音打分')
      return
    }
    if(scoreToStartForm[3].value == ''){
      alert('请给速度打分')
      return
    }
    if(scoreToStartForm[4].value == ''){
      alert('请给想不出了打分')
      return
    }
    const result = {}
    result.score = totalValue
    result.remark = remarkValue
    Object.assign(result,scoreToStartForm)
    console.log(result,this.props)

  }

  onhref = ()=>{
    const { routerActions } = this.props
    //console.log(routerActions.go)
    routerActions.push('/test')
    console.log(push)
    //store.dispatch(push('/test'))

  }

  render(){
    console.log(this.props)
    const { checked } = this.props
    const dataArray = [
      {
        stsTitle:'语言',
        stsDetail:'描述性文字1'
      },
      {
        stsTitle:'文字',
        stsDetail:'描述性文字2'
      },
      {
        stsTitle:'声音',
        stsDetail:'描述性文字3'
      },
      {
        stsTitle:'速度',
        stsDetail:'描述性文字4'
      },
      {
        stsTitle:'想不出了',
        stsDetail:'描述性文字5'
      },
    ]
    return(
      <div className='demo-container'  >

        <div className='container1'>
          <span>评分</span><Total maxvalue={15} /><span>分值（15分）</span>
        </div>
        {
          dataArray.map(function(value,index,array){
            return <ScoreStart propkey={String(index)} stsTitle={value.stsTitle} stsDetail={value.stsDetail} key={index} />
          })
        }
        <div className='remark-box' >
          <div className='remark'>
            评语
          </div>
          <div className='t-box'>
            <textarea className='textarea' onChange={(e)=>{
              this.remarkChange(e.target.value)
            }} >
            </textarea>
          </div>
        </div>
        <div>
          <span>
            推荐
          </span>
          <Switch  checked={checked} onChange={(e)=>{
            this.recommendChange(!checked)
          }}/>
        </div>

        <button className='button' onClick={(e)=>{
          e.preventDefault()
          this.submit()

        }}>
          提交
        </button>

        <button onClick={this.onhref}>
          跳转
        </button>
        {this.props.children}
      </div> 
    )
  }
}

Demo.propTypes = {
  remark:PropTypes.any,
  recommend:PropTypes.any,
  totalValue:PropTypes.any,
  scoreToStartForm:PropTypes.any,
  remarkValue:PropTypes.any,
  checked:PropTypes.any,
  children:PropTypes.any,
  actions:PropTypes.object,
  routerActions:PropTypes.object
}



