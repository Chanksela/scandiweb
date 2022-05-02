import React, { Component } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
export default class Cart extends Component {
  render() {
    return (
      <div className="navbar-cart">
        <button onClick={this.props.handleCart}>
          Cart {this.props.counter}
        </button>
        {this.props.cart && (
          <div className="dropdown-cart">
            <CartItem id="" />
            <Link to={"/cartitems"}>Shop</Link>
          </div>
        )}
      </div>
    );
  }
}
