import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/Products/ProductCard";
import Services from "../services/service";

export default class Tech extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductCard category={Services.TECH} />
      </div>
    );
  }
}
