import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../services/contex";
export default class CartItem extends Component {
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return state.itemsArray.length > 0 ? (
            <div>
              {console.log(state.add)}
              {state.itemsArray.map((product, index) => (
                <div key={index}>
                  <ul>
                    <li>
                      <img
                        alt="item-img"
                        src={product.gallery?.[0]}
                        style={{ width: "50px" }}
                      />
                      <p>
                        {product.prices[state.amount].amount * product.qty}
                        {state.currency}
                      </p>
                      <div>
                        <button
                          id={product.id}
                          onClick={(e) =>
                            this.props.onRemove(e.target.id, product)
                          }
                        >
                          -
                        </button>
                        <p>{product.qty}</p>
                        <button
                          id={product.id}
                          onClick={(e) => state.add(e.target.id, product)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
              <button onClick={this.props.clearCart}>Clear All</button>
              <Link to={"/cartitems"}>Shop</Link>
            </div>
          ) : (
            "Nothing to Show"
          );
        }}
      </ProductConsumer>
    );
  }
}
