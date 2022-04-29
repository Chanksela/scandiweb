import { Component } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

import "./Navbar.css";

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
    console.log(this.state.cart);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-categories">
          {" "}
          <Links />
        </div>
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="navbar-cart-currency">
          <div className="navbar-currency">
            <button>Currency</button>
          </div>
          <div className="navbar-cart">
            <button onClick={this.handleCart.bind(this)}>Cart</button>
            {!this.state.cart && (
              <div className="dropdown-cart">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
                <button>Shop</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
