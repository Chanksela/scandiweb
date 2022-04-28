import { gql } from "@apollo/client";

// GQL requests
const NAVBAR = gql`
  {
    categories {
      name
    }
  }
`;
const ALL = gql`
  {
    category(input: { title: "all" }) {
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
const TECH = gql`
  {
    category(input: { title: "tech" }) {
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
const CLOTHES = gql`
  {
    category(input: { title: "clothes" }) {
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
const exports = { NAVBAR, ALL, CLOTHES, TECH };
export default exports;
