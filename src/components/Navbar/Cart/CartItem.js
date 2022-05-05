import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.testArray)}
        {this.props.testArray.length > 0 &&
          this.props.testArray.map((product, index) => (
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
                  <button onClick={() => this.props.test(product)}>+</button>
                </div>
              </li>
            </ul>
          ))}
        <button onClick={this.props.clearCart}>Clear All</button>
      </div>
    );
  }
}
