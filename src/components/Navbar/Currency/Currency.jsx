import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import GQL from "../../../services/GQL";
import { ProductConsumer } from "../../../services/contex";
import "./Currency.css";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      message: "Hello",
      test: "test",
    };
    this.currencyHandler = this.currencyHandler.bind(this);
  }
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
                  <div className="navbar-currency">
                    <div className="currency-select">
                      <div onClick={this.currencyHandler} className="default">
                        {state.currency}
                      </div>
                      <div
                        className={
                          this.state.show
                            ? "options-acvtive"
                            : "options-disabled"
                        }
                      >
                        {currencies.map((currency) => (
                          <div key={currency.label}>
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
