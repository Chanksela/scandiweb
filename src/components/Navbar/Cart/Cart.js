import React, { Component } from "react";
import { ProductConsumer } from "../../../services/contex";

import CartItem from "./CartItems";
export default class Cart extends Component {
  constructor() {
    super();
    this.state = { qty: 0, test: false };
  }
  handleTest() {
    this.setState((curState) => {
      return { test: !curState.test };
    });
  }
  render() {
    return (
      <ProductConsumer>
        {(state) => (
          <div className="navbar-cart">
            <button onClick={() => this.handleTest()}>
              Cart {state.itemsArray.length}
            </button>
            {this.state.test && <CartItem />}
          </div>
        )}
      </ProductConsumer>
    );
  }
}
