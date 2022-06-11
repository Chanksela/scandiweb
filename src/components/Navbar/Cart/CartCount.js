import React, { Component } from "react";

export default class CartCount extends Component {
  render() {
    return (
      <p className={this.props.class}>
        {this.props.state.totalQty(this.props.state)}
      </p>
    );
  }
}
