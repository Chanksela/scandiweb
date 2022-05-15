import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <div>
                <ul key={index}>
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
                        onClick={(e) =>
                          this.props.addItem(e.target.id, product)
                        }
                      >
                        +
                      </button>
                    </div>
                  </li>
                </ul>
                <button onClick={this.props.clearCart}>Clear All</button>
                <Link to={"/cartitems"}>Shop</Link>
              </div>
            ))
          : "Nothing to Show"}
      </div>
    );
  }
}
