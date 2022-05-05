import { Component } from "react";
import { Link } from "react-router-dom";

import Links from "./Links/Links";

import "./Navbar.css";

import Cart from "./Cart/Cart";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { cart: false };
  }
  handleCart() {
    console.log("clicked");
    this.setState((curState) => {
      console.log(curState);
      return { cart: !curState.cart };
    });
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-categories">
          {" "}
          <Links selectCategory={this.props.selectCategory} />
        </div>
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="navbar-cart-currency">
          <div className="navbar-currency">
            <button>Currency</button>
          </div>
          <Cart
            itemID={this.props.itemID}
            itemArray={this.props.itemArray}
            handleCart={this.handleCart.bind(this)}
            cart={this.state.cart}
            counter={this.props.counter}
            cartArray={this.props.cartArray}
          />
        </div>
      </div>
    );
  }
}
