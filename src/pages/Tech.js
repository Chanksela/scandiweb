import React, { Component } from "react";
import ProductCard from "../components/Products/ProductsCard/ProductCard";
import GQL from "../services/GQL";

export default class Tech extends Component {
  render() {
    return (
      <div>
        <ProductCard gql={GQL.PRODUCTS} category="tech" />
      </div>
    );
  }
}
