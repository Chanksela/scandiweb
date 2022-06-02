import React, { Component } from "react";
import { ProductConsumer } from "../../services/contex";

export default class CartItems extends Component {
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return <button onClick={state.clearCart}>Clear All</button>;
        }}
      </ProductConsumer>
    );
  }
}
