import { Component } from "react";
import { Link } from "react-router-dom";

import Links from "./Links/Links";
import Currency from "./Currency/Currency";
import Cart from "./Cart/Cart";
import "./Navbar.css";

export default class Navbar extends Component {
  // constructor() {
  //   super();
  //   this.state = { cart: false, test: "" };
  // }

  // handleCart() {
  //   console.log("clicked");
  //   this.setState((curState) => {
  //     console.log(curState);
  //     return { cart: !curState.cart };
  //   });
  // }

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
            testArray={this.props.testArray}
            itemID={this.props.itemID}
            itemsArray={this.props.itemsArray}
            cart={this.props.cart}
            counter={this.props.counter}
            test={this.props.test}
            currency={this.props.currency}
            amount={this.props.amount}
            // functions
            addItem={this.props.addItem}
            increaseItem={this.props.increaseItem}
            decreaseItem={this.props.decreaseItem}
            clearCart={this.props.clearCart}
            handleCart={this.props.handleCart}
          />
        </div>
      </div>
    );
  }
}
