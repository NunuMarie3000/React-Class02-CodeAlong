
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
// import Button from 'react-bootstrap/Button'

export default class App extends Component {
  render() {
    return (
      <>
        <Header name='Stormy'/>
        {/* <Button href='#' variant='primary'>I'm a Cute Button</Button> */}
        <Main/>
      </>
    )
  }
}
