import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>SomeProduct.com</h1>
        <h2>Welcome to Some Product.com, {this.props.name}!</h2>
        <p>If we have it, we have it. If we don't, we don't.</p>

      </div>
    )
  }
}
