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
                  {product.prices[this.props.amount].amount *
                    this.props.counter}
                  {this.props.currency}
                </p>
                <div>
                  <button onClick={this.props.decreaseItem}>-</button>
                  <p>{this.props.counter}</p>
                  <button onClick={this.props.increaseItem}>+</button>
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
