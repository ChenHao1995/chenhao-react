import React, { Component } from 'react'
import { render, hydrate } from 'react-dom'

export default class Home extends Component {
  render() {
    return (
      <div
        onClick={() => {
          alert('chenhao')
        }}
      >
        这是一个home
        <img src="../img/hua.jpg" />
      </div>
    )
  }
}
