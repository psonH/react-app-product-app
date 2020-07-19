import React, { Component } from 'react';
import Products from './components/Products'
import { products } from './products'
import Header from './components/layout/Header'
import Cart from './components/pages/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    products,
    cart: [],
  }
  addToCart = (id) => {
    const cartItem = this.state.products.filter(product => product.id === id)
    this.setState({cart: [...this.state.cart, cartItem[0]]})
    //console.log(this.state.cart)
  }
  delfromCart = (id) => {
    console.log(id)
    this.setState({cart: [...this.state.cart.filter(cart => cart.id !== id)]})
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/">
             <Products products={this.state.products} addToCart={this.addToCart}/>
          </Route>
          <Route path="/cart">
             <Cart cart={this.state.cart} delfromCart={this.delfromCart}/>
          </Route>
        </div>
      </Router>
    );
  } 
}

export default App;
