import React, { Component } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
export default class Cart extends Component {
  render() {
    return (
      <div className="navbar-cart">
        <button onClick={this.props.handleCart}>
          Cart {this.props.itemsArray.length}
        </button>
        {this.props.cart && (
          <div className="dropdown-cart">
            <CartItem
              // states
              amount={this.props.amount}
              currency={this.props.currency}
              itemID={this.props.itemID}
              itemsArray={this.props.itemsArray}
              counter={this.props.counter}
              test={this.props.test}
              // functions
              increaseItem={this.props.increaseItem}
              decreaseItem={this.props.decreaseItem}
              clearCart={this.props.clearCart}
              cartArray={this.props.cartArray}
            />
            <Link to={"/cartitems"}>Shop</Link>
          </div>
        )}
      </div>
    );
  }
}
