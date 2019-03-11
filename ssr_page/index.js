import React, { Component } from 'react'
import { render, hydrate } from 'react-dom'
import Home from './home'
hydrate(<Home />, document.getElementById('root'))
