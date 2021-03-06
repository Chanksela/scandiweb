import React, { Component } from "react";

export default class CartPriceDetails extends Component {
  render() {
    return (
      <>
        <p>Amount: {this.props.state.totalQty(this.props.state).toFixed(2)}</p>
        <p>
          Tax:{" "}
          {`${(this.props.total(this.props.state) * 0.21).toFixed(2)} ${
            this.props.state.currency
          }`}
        </p>
      </>
    );
  }
}
