import React, { Component } from "react";
import { ProductConsumer } from "../../../services/contex";

import CartItems from "./CartItems";
export default class Cart extends Component {
  constructor() {
    super();
    this.state = { cart: false };
  }
  handleCart() {
    this.setState((curState) => {
      return { cart: !curState.cart };
    });
  }
  render() {
    return (
      <ProductConsumer>
        {(state) => (
          <div className="navbar-cart">
            <button onClick={() => this.handleCart()}>
              Cart {state.totalQty(state)}
            </button>
            {this.state.cart && <CartItems />}
          </div>
        )}
      </ProductConsumer>
    );
  }
}
