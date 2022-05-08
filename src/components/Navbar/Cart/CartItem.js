import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <div>
        {this.props.itemsArray.length > 0 &&
          this.props.itemsArray.map((product, index) => (
            <ul key={index}>
              <li>
                <p>{product.name}</p>
                <img
                  alt="item-img"
                  src={product.gallery[0]}
                  style={{ width: "50px" }}
                />
                <p>
                  {product.prices[0].amount}
                  {product.prices[0].currency.symbol}
                </p>
                <div>
                  <button>-</button>
                  <p>{this.props.counter}</p>
                  <button onClick={() => this.props.test(product)}>+</button>
                </div>
              </li>
            </ul>
          ))}
        {this.props.itemsArray.length > 0 && (
          <button onClick={this.props.clearCart}>Clear All</button>
        )}
      </div>
    );
  }
}
