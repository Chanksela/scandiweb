import { Component } from "react";

import Links from "./Links/Links";
import Currency from "./Currency/Currency";
import Cart from "./Cart/Cart";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-categories">
          <Links selectCategory={this.props.selectCategory} />
        </div>
        <div className="navbar-logo">
          <img id="logo" alt="logo" src={Logo} />
        </div>
        <div className="navbar-cart-currency">
          <div className="navbar-currency">
            <Currency
              // function
              currencyChange={this.props.currencyChange}
            />
          </div>
          <Cart />
        </div>
      </div>
    );
  }
}
