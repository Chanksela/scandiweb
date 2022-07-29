import React, { Component } from "react";
import ProductCard from "../components/Products/ProductsCard/ProductCard";
import "./PLP.css";
export default class PLP extends Component {
  render() {
    return (
      <div className="PLP">
        <ProductCard />;
      </div>
    );
  }
}
