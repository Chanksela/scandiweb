import { Component } from "react";

import Navbar from "../components/Navbar/Navbar";
import GQL from "../services/GQL";
import ProductCard from "../components/Products/ProductCard";

export default class Clothes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductCard category={GQL.PRODUCTS} sample="clothes" />
      </div>
    );
  }
}
