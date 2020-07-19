import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {
    render() {
        if(this.props.cart){
            const cart = this.props.cart.map((cart) => (
                <CartItem key={cart.id} cart={cart} delfromCart={this.props.delfromCart} />
            ));
            return (
                <div style={cartItemsStyle}>{cart}</div>
            )
        }else{
            return(
                <div>
                    
                </div>
            )
        }
    }
}

const cartItemsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
}
