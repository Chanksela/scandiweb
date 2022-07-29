import { Component } from "react";

import Links from "./Links/Links";
import "./Navbar.css";
import logo from "../../Images/Logo.png";
import Logo from "../Logo/Logo";
import CartAndCurrency from "./Cart&Currency/CartAndCurrency";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Links selectCategory={this.props.selectCategory} />
        <Logo logo={logo} />
        <CartAndCurrency />
      </div>
    );
  }
}
