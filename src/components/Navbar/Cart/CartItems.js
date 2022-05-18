import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../services/contex";
import Images from "./Images";
export default class CartItem extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.slide = this.slide.bind(this);
  }
  total(arg) {
    return arg.itemsArray
      .map((x) => x.prices[arg.amount].amount * x.qty)
      .reduce((cur, item) => {
        return cur + item;
      }, 0);
  }
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
                  <Images product={product} />
                  <>
                    {" "}
                    <p>
                      {product.prices[state.amount].amount}
                      {state.currency}
                    </p>
                    <div>
                      <button
                        id={product.id}
                        onClick={(e) => state.onRemove(e.target.id, product)}
                      >
                        -
                      </button>

                      <p>{product.qty}</p>
                      <button
                        id={product.id}
                        onClick={(e) => state.onAdd(e.target.id, product)}
                      >
                        +
                      </button>
                    </div>
                  </>
                </div>
              ))}{" "}
              {/* adds total price of added items */}
              <p>Total: {`${this.total(state)} ${state.currency}`}</p>
              <p>Tax: {`${this.total(state) * 0.21} ${state.currency}`}</p>
              <button onClick={state.clearCart}>Clear All</button>
              <Link to={"/cartitems"}>Shop</Link>
            </div>
          ) : (
            <p className="empty-cart">Cart is Empty</p>
          );
        }}
      </ProductConsumer>
    );
  }
}
