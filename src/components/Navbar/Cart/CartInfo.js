import React, { Component } from "react";
import "./CartInfo.css";
export default class CartInfo extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.product)}
        <p>
          {this.props.product.prices[this.props.state.amount].amount}
          {this.props.state.currency}
        </p>
        <div>
          <button
            id={this.props.product.id}
            onClick={() => this.props.state.onRemove(this.props.product)}
          >
            -
          </button>

          {this.props.product.size && <p>Size: {this.props.product.size}</p>}
          {this.props.product.itemColor && (
            <>
              Color:
              <p
                className="color"
                style={{ backgroundColor: this.props.product.itemColor }}
              ></p>
            </>
          )}
          {this.props.product.capacity && (
            <p>Capacity: {this.props.product.capacity}</p>
          )}
          {this.props.product.usb && <p>USB: {this.props.product.usb}</p>}
          {this.props.product.touchID && (
            <p>Touch ID: {this.props.product.touchID}</p>
          )}
          <p>{this.props.product.qty}</p>

          <button
            id={this.props.product.id}
            onClick={() => this.props.state.onAdd(this.props.product)}
          >
            +
          </button>
        </div>{" "}
      </div>
    );
  }
}
