import React, { Component } from 'react';
import Product from './Product';
import jsonData from '../data.json';
const products = jsonData.products;

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>Generic Product Title</h1>
        {products.map(obj=>{
          return <Product title={obj.title} img_url={obj.images[0]} description={obj.description} id={obj.id} key={obj.id}/>
        })}
      </div>
    )
  }
}
