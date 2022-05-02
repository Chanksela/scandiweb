import { Component } from "react";

import GQL from "../services/GQL";
import ProductCard from "../components/Products/ProductsCard/ProductCard";

export default class Clothes extends Component {
  render() {
    return (
      <div>
        <ProductCard gql={GQL.PRODUCTS} category="clothes" />
      </div>
    );
  }
}
