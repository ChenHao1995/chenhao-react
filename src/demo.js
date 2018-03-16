import React,{ Component } from 'react'
import {render} from 'react-dom';
import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
import { createStore } from 'redux'
import {PropTypes} from 'prop-types'

const store = createStore(reducer,{
  ux:3
})

const action = {
  type:'CHEN_HAO',
  state:{
    ux:1
  }
}

function reducer(state,action){

  switch(action.type){
    case 'CHEN_HAO' :
      console.log(state)
      console.log(action)
      return state.ux = state.ux*2
    default :
      return state
  }

}

console.log(store.getState())

class Chen extends Component {
  constructor(props,context){
    super(props,context)


  }
  componentDidMount(){
    
  }
  render(){
    console.log(this.context)
    return(<div className='first'>第一个组件</div> )
  }
}
Chen.contextTypes = {
  color:PropTypes.string,
  sex:PropTypes.string
}

class Hao extends Component {

  constructor(props,context){
    super(props)
    
    this.click = function click(){
    store.dispatch({
      type:'CHEN_HAO',
      
    })
  }

  }
  getChildContext(){
    return {
      color:'red',
      sex:'nan'
    }
  }
  componentDidMount(){
    
  }

  click(){
    store.dispatch({
      type:'CHEN_HAO',
      
    })
  }
  render(){
    
    return(<div className='first' onClick={console.log(this)}><Chen/></div> )
  }
}
Hao.childContextTypes = {
  color:PropTypes.string,
  sex:PropTypes.string
}

//路由
render((
  <BrowserRouter>
    <Switch>
      <Route path='/chen' component={Chen} />
      <Route path='/hao' component={Hao} />
    </Switch>
  </BrowserRouter>
),document.getElementById('root'))