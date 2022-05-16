import React, { Component } from "react";
import CartItem from "../components/Navbar/Cart/CartItems";

export default class CartPage extends Component {
  render() {
    return (
      <CartItem
        onAdd={this.props.onAdd}
        onRemove={this.props.onRemove}
        clearCart={this.props.clearCart}
      />
    );
  }
}
