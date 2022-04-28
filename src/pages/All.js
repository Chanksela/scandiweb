import React, { Component } from "react";

import Navbar from "../components/navbar/Navbar";
import GQL from "../services/GQL";
import ProductCard from "../components/Products/ProductCard";

export default class All extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <ProductCard category={GQL.ALL} />
        </div>
      </div>
    );
  }
}
