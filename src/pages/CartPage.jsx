import React, { Component } from "react";
import "./CartPage.css";
import { ProductConsumer } from "../services/contex";
import CartInfo from "../components/Navbar/Cart/CartInfo";
import CartPriceDetails from "../components/Navbar/Cart/CartPriceDetails";
import Button from "../components/Button/Button";

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
            <>
              <h2>Cart</h2>
              <div className="cart-page">
                {state.itemsArray.map((product, index) => (
                  <div key={index}>
                    <CartInfo product={product} state={state} />
                  </div>
                ))}{" "}
                {/* adds total price of added items */}
                <p>Total: {`${this.total(state)} ${state.currency}`}</p>
                <CartPriceDetails state={state} total={this.total} />
                <Button
                  id="clear-btn"
                  function={state.clearCart}
                  content="Clear All"
                />
              </div>
            </>
          ) : (
            <p className="empty-cart">Cart is Empty</p>
          );
        }}
      </ProductConsumer>
    );
  }
}
