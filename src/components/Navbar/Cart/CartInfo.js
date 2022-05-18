import React, { Component } from "react";

export default class CartInfo extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.product.prices[this.props.state.amount].amount}
          {this.props.state.currency}
        </p>
        <div>
          <button
            id={this.props.product.id}
            onClick={(e) =>
              this.props.state.onRemove(e.target.id, this.props.product)
            }
          >
            -
          </button>

          <p>{this.props.product.qty}</p>
          <button
            id={this.props.product.id}
            onClick={(e) =>
              this.props.state.onAdd(e.target.id, this.props.product)
            }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
