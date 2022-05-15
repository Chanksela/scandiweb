import { Component } from "react";
import { Link } from "react-router-dom";

import Links from "./Links/Links";
import Currency from "./Currency/Currency";
import Cart from "./Cart/Cart";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-categories">
          {" "}
          <Links selectCategory={this.props.selectCategory} />
        </div>
        <div className="navbar-logo">
          {/* აუცილებელი არ არის, 
        წაშლა და უბრალოდ ლოგოთი ჩანაცვლება მგონი უკეთესია */}
          <Link to="" onClick={() => this.props.selectCategory("all")}>
            Logo
          </Link>
        </div>
        <div className="navbar-cart-currency">
          <div className="navbar-currency">
            <Currency currencyChange={this.props.currencyChange} />
          </div>
          <Cart
            // states
            itemsArray={this.props.itemsArray}
            // functions
            addItem={this.props.addItem}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            clearCart={this.props.clearCart}
            handleCart={this.props.handleCart}
          />
        </div>
      </div>
    );
  }
}
