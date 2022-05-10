import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import GQL from "../../../services/GQL";

export default class Navbar extends Component {
  render() {
    return (
      <Query query={GQL.CURRENCIES}>
        {({ error, loading, data }) => {
          if (loading) return "Loading...";
          if (error) return `ERROR! ${error.message}`;
          const { currencies } = data;

          return (
            <select
              name="currencies"
              id="currency"
              onChange={(e) => this.props.currencyChange(e, currencies)}
            >
              {currencies.map((v) => (
                <option key={v.label} value={v.symbol}>
                  {v.symbol}
                </option>
              ))}
            </select>
          );
        }}
      </Query>
    );
  }
}
