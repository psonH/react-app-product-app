import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { id, title, image} = this.props.product
        return (
            <div style={productItemStyle}>
                <h4>{title}</h4>
                <img src={image} width="250px" height="250px" />
                <button style={btnStyle} onClick={this.props.addToCart.bind(this, id)}>Add to Cart</button>
            </div>
        )
    }
}
const productItemStyle = {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
}
const btnStyle = {
    backgroundColor: '#32CD32',
    color: '#fff',
    border: 'solid #A9A9A9',
    padding: '10px 0 10px 0',
    margin: '10px 0 10px 0',
    cursor: 'pointer',
}
