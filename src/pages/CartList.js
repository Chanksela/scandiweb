import React, { Component } from "react";

export default class CartList extends Component {
  render() {
    return (
      <div>
        {this.props.itemsArray.length > 0
          ? this.props.itemsArray.map((product, index) => (
              <div key={index}>
                <ul>
                  <li>
                    <p>{product.name}</p>
                    <img
                      alt="item-img"
                      src={product.gallery[0]}
                      style={{ width: "50px" }}
                    />
                    <p>
                      {this.props.currency}
                      {product.prices[this.props.amount].amount}
                    </p>
                    <div>
                      <button>-</button>
                      <button onClick={() => this.props.test(product)}>
                        +
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          : "No Items"}
        {this.props.itemsArray.length > 0 && (
          <button onClick={this.props.clearCart}>Clear All</button>
        )}
      </div>
    );
  }
}
