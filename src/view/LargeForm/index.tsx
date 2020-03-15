import React, { Component, Fragment } from 'react'
import { Input, Form, Upload, Button, message } from 'antd'
import { debounce } from 'lodash'

const Item = Form.Item

export default class LargeForm extends Component<{
  [key: string]: any
}> {
  state = {}
  componentDidMount() {}
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps')
    return null
  }

  getAllForm = () => {
    const middleArray = Array.from({ length: 100 })
    return middleArray.map((v, key) => {
      return (
        <Item label={`input-${key}`} key={key}>
          <Input
            onChange={e => {
              this.setState({
                [`input-${key}`]: e.target.value
              })
            }}
            value={this.state[`input-${key}`]}
          />
        </Item>
      )
    })
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        <SmallForm />
        <h1>大表单测试</h1>
        <Form>{this.getAllForm()}</Form>
      </Fragment>
    )
  }
}

class SmallForm extends Component<{
  [key: string]: any
}> {
  state = {}
  componentDidMount() {}
  static getDerivedStateFromProps() {
    console.log('SmallForm-getDerivedStateFromProps')
    return null
  }

  getAllForm = () => {
    const middleArray = Array.from({ length: 10 })
    return middleArray.map((v, key) => {
      return (
        <Item label={`input-${key}`} key={key}>
          <Input
            onChange={e => {
              this.setState({
                [`input-${key}`]: e.target.value
              })
            }}
            value={this.state[`input-${key}`]}
          />
        </Item>
      )
    })
  }

  render() {
    console.log('SmallForm-render')
    return (
      <Fragment>
        <h1>小表单测试</h1>
        <Form>{this.getAllForm()}</Form>
      </Fragment>
    )
  }
}
