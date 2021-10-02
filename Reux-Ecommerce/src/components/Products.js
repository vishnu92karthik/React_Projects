import React, { Component } from 'react'
import productList from './data';
export default class Products extends Component {
    render() {
        const productItems = this.props.productList.map( product => (
            <div className= "col-md-3">
                <div className="thumbnail text-center">
            <a href={`#${product.id}`} onClick={this.props.handleAddToCart} >
                <img src={`/productList/${product.sku}_2.jpg`} alt={product.title} />
                <p>{product.title}</p>
            </a>
            <div>
                <b>{product.price}</b>
                <button className="btn btn-default">
                    Add to cart
                </button>
            </div>
                </div>
            </div>
        ))
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
