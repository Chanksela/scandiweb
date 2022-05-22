import React, { Component } from "react";
import Attributes from "../../Products/ProductsCard/Details/Attributes";

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
              this.props.state.onRemove(e.target.id, this.props.product)
            }
          >
            -
          </button>
          <Attributes
            product={this.props.product}
            onColorPick={this.props.state.onColorPick}
          />
          {this.props.product.color}
          {this.props.product.size}
          <p>{this.props.product.qty}</p>
          {console.log(this.props.state.itemColor)}
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
