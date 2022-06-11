import React, { Component } from "react";

export default class CartAmount extends Component {
  render() {
    return (
      <p>
        Total:{" "}
        {`${this.props.total(this.props.state)} ${this.props.state.currency}`}
      </p>
    );
  }
}
