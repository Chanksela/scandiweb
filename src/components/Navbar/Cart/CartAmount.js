import React, { Component } from "react";

export default class CartAmount extends Component {
  total(arg) {
    return arg.itemsArray
      .map((item) => item.prices[arg.amount].amount * item.qty)
      .reduce((cur, item) => {
        return cur + item;
      }, 0);
  }
  render() {
    return (
      <p>
        Total: {`${this.total(this.props.state)} ${this.props.state.currency}`}
      </p>
    );
  }
}
