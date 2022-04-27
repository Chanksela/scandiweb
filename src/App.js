import { gql } from "@apollo/client/";

import { Component } from "react";
import Navbar from "./components/navbar/Navbar";

export const ITEMS = gql`
  query Query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

class App extends Component {
  render() {
    return <Navbar />;
  }
}

export default App;
