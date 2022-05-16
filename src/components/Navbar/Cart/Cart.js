import React, { Component } from "react";
import { ProductConsumer } from "../../../services/contex";

import CartItem from "./CartItems";
export default class Cart extends Component {
  constructor() {
    super();
    this.state = { test: false };
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
            {this.state.test && (
              <div className="dropdown-cart">
                <CartItem
                  // functions
                  onAdd={this.props.onAdd}
                  onRemove={this.props.onRemove}
                  clearCart={this.props.clearCart}
                />
              </div>
            )}
          </div>
        )}
      </ProductConsumer>
    );
  }
}
