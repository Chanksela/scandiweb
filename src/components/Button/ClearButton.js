import React, { Component } from "react";
import { ProductConsumer } from "../../services/contex";
import "./ClearButton.css";

export default class CartItems extends Component {
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return (
            <button id="clear-btn" onClick={state.clearCart}>
              Clear All
            </button>
          );
        }}
      </ProductConsumer>
    );
  }
}
