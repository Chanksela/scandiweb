import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import GQL from "../../../services/GQL";
import { ProductConsumer } from "../../../services/contex";
import "./Currency.css";

export default class Navbar extends Component {
  constructor() {
    super();
    this.box = React.createRef();
    this.state = {
      show: false,
      message: "Hello",
      test: "test",
    };
    this.box = React.createRef();
    this.currencyHandler = this.currencyHandler.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }
  handleOutsideClick = (event) => {
    if (this.box && !this.box.current.contains(event.target)) {
      console.log("you just clicked outside of box!");
      this.setState({ show: !this.state.show });
    }
  };
  currencyHandler() {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  }
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return (
            <Query query={GQL.CURRENCIES}>
              {({ error, loading, data }) => {
                if (loading) return "Loading...";
                if (error) return `ERROR! ${error.message}`;
                const { currencies } = data;
                console.log(currencies);
                return (
                  <div ref={this.box} className="currency-select">
                    <div onClick={this.currencyHandler} className="default">
                      {state.currency}
                    </div>
                    <div
                      className={
                        this.state.show
                          ? "btn options-acvtive"
                          : "btn options-disabled"
                      }
                    >
                      {currencies.map((currency) => (
                        <div key={currency.label} className="currency-options">
                          <div
                            id={currency.symbol}
                            onClick={(e) =>
                              state.currencyChange(
                                e,
                                currencies,
                                this.currencyHandler()
                              )
                            }
                          >
                            {currency.label} {currency.symbol}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }}
            </Query>
          );
        }}
      </ProductConsumer>
    );
  }
}
// <select
//                   className="currency-select"
//                   name="currencies"
//                   id="currency"
//                   onChange={(e) => state.currencyChange(e, currencies)}
//                 >
//                   {/* <option defaultValue="selected">{state.currency}</option> */}
//                   {currencies.map((currency) => (
//                     <option key={currency.label} value={currency.symbol}>
//                       {currency.symbol}
//                       {currency.label}
//                     </option>
//                   ))}
//                 </select>
