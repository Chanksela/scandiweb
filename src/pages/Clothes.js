import { Component } from "react";

import Navbar from "../components/navbar/Navbar";
import Services from "../services/service";
import ProductCard from "../components/Products/ProductCard";

export default class Clothes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductCard category={Services.CLOTHES} />
      </div>
    );
  }
}
