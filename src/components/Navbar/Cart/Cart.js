import React, { Component } from "react";
import { ProductConsumer } from "../../../services/contex";

import CartIcon from "../../../Images/Vector.svg";
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
            <img
              alt="cart-icon"
              className="cart-icon"
              src={CartIcon}
              onClick={() => this.handleCart()}
            />
            {state.itemsArray.length > 0 && (
              <p className="cart-badge">{state.totalQty(state)}</p>
            )}
            {this.state.cart && <CartItems />}
          </div>
        )}
      </ProductConsumer>
    );
  }
}
