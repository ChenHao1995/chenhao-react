import React,{ Component } from 'react'
import ReactDOM from 'react-dom';



class Chen extends Component {

  componentDidMount(){
    alert('ahahah')
  }

  render(){
    return(<div className='first'>第一个组件</div> )
  }
}
ReactDOM.render(<Chen/>,document.getElementById('root'))