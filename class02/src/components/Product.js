import React, { Component } from 'react'

import {Button, Card} from 'react-bootstrap'

export default class Product extends Component {
  constructor(props){
    super(props);
    //this is a state, we can now do whatever we want with this state
    this.state = {
      cart: 0
    }
  }

  handleClicks(){
    //when user clicks image cart++
    //when handling state/changing state, we have to use specific state changing method, this.setState()
    //this.setState() is asynchronous, so you need to use callback function if you want it to update automatically
    this.setState((prev) =>({
      cart: prev.cart + 1
    }))
  }

  render() {
    return (
    //  <div>
    //   <h1>{this.props.id}. {this.props.title}</h1>
    //   <h2>&#128722;{this.state.cart} added to cart</h2>
    //   <img onClick={()=> this.handleClicks()} src={this.props.img_url} alt={this.props.description}></img>
    //   <p>{this.props.description}</p>
    //  </div>

     <div>
      <Card style={{width: '18rem'}}>
        <Card.Img variant='top' src={this.props.img_url} alt={this.props.description}></Card.Img>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description} <hr></hr>
            &#128722;{this.state.cart} added to cart
          </Card.Text>
          <Button variant='primary' onClick={()=> this.handleClicks()}>Click if you like me!</Button>
        </Card.Body>
      </Card>
     </div>
    )
  }
}
