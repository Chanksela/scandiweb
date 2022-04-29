import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/Products/ProductCard";
import GQL from "../services/GQL";

export default class Tech extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductCard category={GQL.PRODUCTS} sample="tech" />
      </div>
    );
  }
}
