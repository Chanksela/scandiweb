import React, { Component } from "react";

export default class CartAttributes extends Component {
  render() {
    return (
      <div className="cart-attributes">
        {this.props.product.size && (
          <>
            <p>Size:</p>
            <p> {this.props.product.size}</p>
          </>
        )}
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
          <>
            <p>Capacity:</p>
            <p>{this.props.product.capacity}</p>
          </>
        )}
        {this.props.product.usb && (
          <>
            <p>USB:</p>
            <p> {this.props.product.usb}</p>
          </>
        )}
        {this.props.product.touchID && (
          <p>Touch ID: {this.props.product.touchID}</p>
        )}
      </div>
    );
  }
}
