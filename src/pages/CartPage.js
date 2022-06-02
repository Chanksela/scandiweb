import React, { Component } from "react";

import { ProductConsumer } from "../services/contex";
import CartImages from "../components/Navbar/Cart/CartImages";
import CartInfo from "../components/Navbar/Cart/CartInfo";
import CartPriceDetails from "../components/Navbar/Cart/CartPriceDetails";
import ClearButton from "../components/Button/ClearButton";
export default class CartItems extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.slide = this.slide.bind(this);
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
  // function for image slider
  slide(arg, arg2) {
    if (arg === "next") {
      this.setState({ index: this.state.index + 1 });
      if (this.state.index >= arg2.length) {
        this.setState({ index: 0 });
      }
    }
    if (arg === "prev") {
      this.setState({ index: this.state.index - 1 });
      if (this.state.index <= 0) {
        this.setState({ index: arg2.length - 1 });
      }
    }
  }
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return state.itemsArray.length > 0 ? (
            <div className="dropdown-cart">
              {state.itemsArray.map((product, index) => (
                <div key={index}>
                  <CartImages product={product} />
                  <CartInfo product={product} state={state} />
                </div>
              ))}{" "}
              {console.log(state)}
              {/* adds total price of added items */}
              <p>Total: {`${this.total(state)} ${state.currency}`}</p>
              <CartPriceDetails state={state} total={this.total} />
              <ClearButton />
            </div>
          ) : (
            <p className="empty-cart">Cart is Empty</p>
          );
        }}
      </ProductConsumer>
    );
  }
}
