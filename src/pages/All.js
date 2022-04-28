import React, { Component } from "react";

import Navbar from "../components/navbar/Navbar";
import Services from "../services/service";
import ProductCard from "../components/Products/ProductCard";

export default class All extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <ProductCard category={Services.ALL} />
        </div>
      </div>
    );
  }
}
