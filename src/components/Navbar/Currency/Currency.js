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

                return (
                  <select
                    className="currency-select"
                    name="currencies"
                    id="currency"
                    onChange={(e) => state.currencyChange(e, currencies)}
                  >
                    {currencies.map((v) => (
                      <option key={v.label} value={v.symbol}>
                        {v.symbol}
                        {v.label}
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
