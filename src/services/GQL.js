import { gql } from "@apollo/client";

// GQL requests for category  pages
const NAVBAR = gql`
  {
    categories {
      name
    }
  }
`;
const PRODUCTS = gql`
  query Query($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

// Details page GQL
const DETAILS = gql`
  query Query($productId: String!) {
    product(id: $productId) {
      category
      id
      name
      gallery
      description
      brand
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
    }
  }
`;

// Currencies from GQL
const CURRENCIES = gql`
  query Query {
    currencies {
      label
      symbol
    }
  }
`;
const exports = { NAVBAR, PRODUCTS, DETAILS, CURRENCIES };
export default exports;
