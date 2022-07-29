import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../services/contex";

import CartCount from "./CartCount";
import CartInfo from "./CartInfo";
import Button from "../../Button/Button";
import CartAmount from "./CartAmount";

import "./CartItems.css";
export default class CartItems extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return state.itemsArray.length > 0 ? (
            <>
              <div className="overlay" onClick={this.props.handleCart}></div>
              <div className="dropdown-cart">
                <div className="cart-scrollable">
                  {" "}
                  <CartCount start="My Bag " end=", Items" state={state} />
                  {state.itemsArray.map((product, index) => (
                    <div key={index}>
                      <CartInfo product={product} state={state} />
                    </div>
                  ))}{" "}
                </div>
                <div className="cart-footer">
                  {" "}
                  {/* adds total price of added items */}
                  <CartAmount state={state} />
                  <button id="shop-btn">
                    <Link id="shop-link" to={"/cartitems"}>
                      Shop
                    </Link>
                  </button>
                  <Button
                    id="clear-btn"
                    function={state.clearCart}
                    content="Clear All"
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className="overlay" onClick={this.props.handleCart}></div>
              <p className="empty-cart">Cart is Empty</p>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
