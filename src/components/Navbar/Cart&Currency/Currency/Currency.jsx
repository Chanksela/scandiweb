import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import GQL from "../../../../services/GQL";
import { ProductConsumer } from "../../../../services/contex";
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
  handleOutsideClick = (e) => {
    // console.log("box: ", this.box);
    // console.log("click target: ", e.target);
    if (this.box && !this.box?.current.contains(e.target)) {
      this.setState({ show: false });
    }
  };
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  currencyHandler() {
    this.setState({ show: !this.state.show });
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

                return (
                  <div ref={this.box} className="currency-select">
                    <div onClick={this.currencyHandler} className="default">
                      {state.currency}
                    </div>
                    <div
                      className={
                        this.state.show
                          ? "crn-card options-acvtive"
                          : "crn-card options-disabled"
                      }
                    >
                      {currencies.map((currency) => (
                        <div key={currency.label} className="currency-options">
                          <div
                            onClick={(e) =>
                              state.currencyChange(
                                e,
                                currencies,
                                this.currencyHandler()
                              )
                            }
                          >
                            <div className="currency" id={currency.symbol}>
                              <div id={currency.symbol}>{currency.symbol}</div>
                              <div id={currency.symbol}>{currency.label}</div>
                            </div>
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
