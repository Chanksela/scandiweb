import React, { Component } from "react";
import CartAttributes from "./CartAttributes";
import CartImage from "./CartImage";
import "./CartItems.css";
export default class CartInfo extends Component {
  render() {
    return (
      <>
        <div className="cart-info">
          <div className="item-info-section">
            <h3>{this.props.product.brand}</h3>
            <h4>{this.props.product.name}</h4>
            <p>
              {this.props.product.prices[this.props.state.amount].amount}
              {this.props.state.currency}
            </p>
            <CartAttributes product={this.props.product} />
          </div>
          <div className="item-image-section">
            <CartImage state={this.props.state} product={this.props.product} />
          </div>
        </div>
        <div id="line"></div>
      </>
    );
  }
}
