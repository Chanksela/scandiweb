import React, { Component } from "react";
import Cart from "./Cart/Cart";
import Currency from "./Currency/Currency";

export default class CartAndCurrency extends Component {
  render() {
    return (
      <div className="cart-currency">
        <Currency />
        <Cart />
      </div>
    );
  }
}
