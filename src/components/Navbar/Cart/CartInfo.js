import React, { Component } from "react";

export default class CartInfo extends Component {
  render() {
    return (
      <div>
        <p>
          {console.log(this.props.product)}
          {this.props.product.prices[this.props.state.amount].amount}
          {this.props.state.currency}
        </p>
        <div>
          <button
            id={this.props.product.id}
            onClick={(e) =>
              this.props.state.onRemove(
                e.target.id,
                this.props.product,
                this.props.product.size
              )
            }
          >
            -
          </button>
          {this.props.product.color && <p>Color: {this.props.product.color}</p>}
          {this.props.product.capacity && (
            <p>Capacity: {this.props.product.capacity}</p>
          )}
          {this.props.product.size && <p>Size: {this.props.product.size}</p>}
          <p>{this.props.product.qty}</p>
          {console.log(this.props.state.itemColor)}
          <button
            id={this.props.product.id}
            onClick={(e) =>
              this.props.state.onAdd(
                e.target.id,
                this.props.product,
                this.props.product.size
              )
            }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
