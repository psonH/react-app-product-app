import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const {id, title, image} = this.props.cart
        return (
            <div style={cartItemStyle}>
                <h4>{title}</h4>
                <img src={image} width="250px" height="250px" />
                <button style={btnStyle} onClick={this.props.delfromCart.bind(this, id)}>Remove from Cart</button>
            </div>
        )
    }
}
const cartItemStyle = {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
}
const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'solid #A9A9A9',
    padding: '10px 0 10px 0',
    margin: '10px 0 10px 0',
    cursor: 'pointer',
}
