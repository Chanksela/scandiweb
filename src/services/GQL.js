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
      id
      name
      gallery
      description
      brand
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
const exports = { NAVBAR, PRODUCTS, DETAILS };
export default exports;
