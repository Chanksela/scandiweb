import React, { Component } from "react";

export default class CartCount extends Component {
  render() {
    return (
      <p className={this.props.class}>
        {this.props.start
          ? this.props.start +
            this.props.state.totalQty(this.props.state) +
            this.props.end
          : this.props.state.totalQty(this.props.state)}
        {}
      </p>
    );
  }
}
