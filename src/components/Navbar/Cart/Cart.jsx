import React, { Component } from "react";
import { ProductConsumer } from "../../../services/contex";
import CartIcon from "../../../Images/Vector.svg";
import CartItems from "./CartItems";
import CartCount from "./CartCount";
import "./Cart.css";
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
              <CartCount class="cart-badge" state={state} />
            )}
            {this.state.cart && (
              <CartItems handleCart={this.handleCart.bind(this)} />
            )}
          </div>
        )}
      </ProductConsumer>
    );
  }
}
