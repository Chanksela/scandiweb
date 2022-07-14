import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import GQL from "../../../services/GQL";
import { ProductConsumer } from "../../../services/contex";

export default class Navbar extends Component {
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
                  <select
                    className="currency-select"
                    name="currencies"
                    id="currency"
                    onChange={(e) => state.currencyChange(e, currencies)}
                  >
                    {/* <option defaultValue="selected">{state.currency}</option> */}
                    {currencies.map((currency) => (
                      <option key={currency.label} value={currency.symbol}>
                        {currency.symbol}
                        {currency.label}
                      </option>
                    ))}
                  </select>
                );
              }}
            </Query>
          );
        }}
      </ProductConsumer>
    );
  }
}
