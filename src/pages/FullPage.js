import React, { Component } from "react";

import GQL from "../services/GQL";
import ProductCard from "../components/Products/ProductsCard/ProductCard";
export default class All extends Component {
  render() {
    return (
      <div>
        <div>
          <ProductCard gql={GQL.PRODUCTS} category={this.props.categories} />
        </div>
      </div>
    );
  }
}
