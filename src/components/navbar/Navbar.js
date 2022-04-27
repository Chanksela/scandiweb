import { Component } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

import "./Navbar.css";

export default class Navbar extends Component {
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
          <div className="navbar-currency">Currency</div>
          <div className="navbar-cart">Cart</div>
        </div>
      </div>
    );
  }
}
