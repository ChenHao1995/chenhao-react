import React, { Component } from 'react'
//import {render} from 'react-dom'
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
//import { createStore } from 'redux'
import { PropTypes } from 'prop-types'
//import AppRouter from './router.js'
import store from './store'
import Actions from '@store/actions'
import { connect } from 'react-redux'
import democss from '../css/demo.css'
import flexible from '../js/index.min.js'
//import  antdstyle  from '../node_modules/antd-mobile/dist/antd-mobile.css';
import { Switch } from 'antd-mobile'
import Total from './Component/totalPoints.js'
//import ScoreStart from './Component/scoreToStart.js'
import { bindActionCreators } from 'redux'
import { routerActions, push } from 'react-router-redux'
import createClass from 'create-react-class'
//import Api from '../api'
import {
  DragDropContext,
  DragSource,
  DropTarget,
  DragDropContextProvider
} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { Table } from 'antd'
import './dropTable.less'
import { findDOMNode } from 'react-dom'
import renderEmpty from 'antd/lib/config-provider/renderEmpty'
interface PropsType {
  children: JSX.Element
  // name: string
}
const source = {
  width: 100,
  height: 100,
  background: 'red'
}
const source2 = {
  width: 100,
  height: 100,
  background: 'yellow'
}
const cardSource = {
  beginDrag(props, monitor, component) {
    console.log(props, monitor, component)
    return {
      id: props.id
    }
  },
  endDrag(props, monitor, component) {
    console.log(props, monitor, component)
  }
}

function sourceCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  }
}

@DragSource('source', cardSource, sourceCollect)
class Card extends Component<{ [key: string]: any }> {
  constructor(props) {
    super(props)
  }
  render() {
    const { isDragging, connectDragSource } = this.props
    return connectDragSource(<div style={source} id={1} />)
  }
}

const cardTarget = {
  hover(props, monitor, component) {
    console.log(props, monitor, component)
  },
  drop(props, monitor, component) {
    console.log(console.log(props, monitor, component))
  }
}

function targetCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  }
}
@DropTarget('source', cardTarget, targetCollect)
class Target extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { connectDropTarget } = this.props
    return connectDropTarget(<div style={source2}>target</div>)
  }
}

Card.propTypes = {
  isDragging: PropTypes.any,
  connectDragSource: PropTypes.any
}
Target.propTypes = {
  isDragging: PropTypes.any,
  connectDropTarget: PropTypes.any
}

@DragDropContext(HTML5Backend)
export default class Content extends Component<PropsType> {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        <Card
          ref={ref => {
            console.log(ref)
          }}
        />
        <Target />
        <HA
          ref={inst => {
            console.log(inst)
          }}
        />
      </div>
    )
  }
}

function forwardRef(props, ref) {
  return <HOC {...props} forwardedRef={ref} />
}

const HA = React.forwardRef(forwardRef)

class HOC extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { forwardedRef } = this.props
    return (
      <div>
        HOC
        <Card ref={forwardedRef} />
      </div>
    )
  }
}
