import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../services/contex";

import CartCount from "./CartCount";
import CartInfo from "./CartInfo";
import ClearButton from "../../Button/ClearButton";
import CartAmount from "./CartAmount";
export default class CartItems extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.total = this.total.bind(this);
  }
  // sums the price of items
  total(arg) {
    return arg.itemsArray
      .map((item) => item.prices[arg.amount].amount * item.qty)
      .reduce((cur, item) => {
        return cur + item;
      }, 0);
  }

  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return state.itemsArray.length > 0 ? (
            <div className="dropdown-cart">
              <div className="cart-scrollable">
                {" "}
                <CartCount state={state} />
                {state.itemsArray.map((product, index) => (
                  <div key={index}>
                    <CartInfo product={product} state={state} />
                  </div>
                ))}{" "}
              </div>
              <div className="cart-footer">
                {" "}
                {/* adds total price of added items */}
                <CartAmount total={this.total} state={state} />
                <button id="shop-btn">
                  <Link id="shop-link" to={"/cartitems"}>
                    Shop
                  </Link>
                </button>
                <ClearButton />
              </div>
            </div>
          ) : (
            <p className="empty-cart">Cart is Empty</p>
          );
        }}
      </ProductConsumer>
    );
  }
}
