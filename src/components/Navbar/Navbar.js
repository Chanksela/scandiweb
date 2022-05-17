import { Component } from "react";

import Links from "./Links/Links";
import Currency from "./Currency/Currency";
import Cart from "./Cart/Cart";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-categories">
          <Links selectCategory={this.props.selectCategory} />
        </div>
        <div className="navbar-logo">
          {/* აუცილებელი არ არის, 
        წაშლა და უბრალოდ ლოგოთი ჩანაცვლება მგონი უკეთესია */}
          <h3>Scandiweb</h3>
        </div>
        <div className="navbar-cart-currency">
          <div className="navbar-currency">
            <Currency
              // function
              currencyChange={this.props.currencyChange}
            />
          </div>
          <Cart
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
