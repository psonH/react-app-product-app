import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class Products extends Component {
    render() {
        const products = this.props.products.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={this.props.addToCart} />
        ));
        return ( 
            <div style={productsStyle}>
                {products}
            </div>
        );
    }
}

const productsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
}