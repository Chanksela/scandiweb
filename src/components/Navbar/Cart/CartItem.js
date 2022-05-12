import React, { Component } from "react";

export default class CartItem extends Component {
  constructor() {
    super();
    this.state = { itemQty: 0 };
  }
  render() {
    return (
      <div>
        {this.props.itemsArray.length > 0
          ? this.props.itemsArray.map((product, index) => (
              <ul key={index}>
                {console.log(this.props.itemsArray.length)}
                <li>
                  <img
                    alt="item-img"
                    src={product.gallery?.[0]}
                    style={{ width: "50px" }}
                  />
                  <p>
                    {product.prices[this.props.amount].amount * product.qty}
                    {this.props.currency}
                  </p>
                  <div>
                    <button
                      id={product.id}
                      onClick={(e) =>
                        this.props.decreaseItem(e.target.id, product)
                      }
                    >
                      -
                    </button>
                    <p>{product.qty}</p>
                    <button
                      id={product.id}
                      onClick={(e) => this.props.addItem(e.target.id, product)}
                    >
                      +
                    </button>
                  </div>
                </li>
              </ul>
            ))
          : "Nothing to Show"}
        {this.props.itemsArray.length > 0 && (
          <button onClick={this.props.clearCart}>Clear All</button>
        )}
      </div>
    );
  }
}
