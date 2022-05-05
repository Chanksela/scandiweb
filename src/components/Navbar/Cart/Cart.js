import React, { Component } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
export default class Cart extends Component {
  render() {
    return (
      <div className="navbar-cart">
        <button onClick={this.props.handleCart}>
          Cart {this.props.testArray.length}
        </button>
        {this.props.cart && (
          <div className="dropdown-cart">
            <CartItem
              itemID={this.props.itemID}
              clearCart={this.props.clearCart}
              testArray={this.props.testArray}
              itemArray={this.props.itemArray}
              cartArray={this.props.cartArray}
              test={this.props.test}
            />
            <Link to={"/cartitems"}>Shop</Link>
          </div>
        )}
      </div>
    );
  }
}
