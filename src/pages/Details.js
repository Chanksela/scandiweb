import React, { Component } from "react";
import services from "../services/services";
import GQL from "../services/GQL";
import { Query } from "@apollo/client/react/components";
import Navbar from "../components/Navbar/Navbar";

class Details extends Component {
  constructor() {
    super();
    this.state = { addedItems: [], counter: "" };
  }

  addToCart(e) {
    this.state.addedItems.push(e.target.id);
    console.log(this.state.addedItems.length);
    this.setState({ counter: this.state.addedItems.length });
    console.log(this.state.counter);
  }
  render() {
    const id = this.props.params.id;

    return (
      <div>
        <Navbar
          test={this.state.addedItems}
          counter={this.state.addedItems.length}
        />

        <h1>Product ID: {id}</h1>
        <Query query={GQL.DETAILS} variables={{ productId: id }}>
          {({ error, loading, data }) => {
            if (error) return `Error ${error.message}`;
            if (loading) return loading;
            const { product } = data;
            return (
              <div>
                <h2>{product.name}</h2>
                <h4>{product.brand}</h4>
                <img
                  alt="product-img"
                  src={product.gallery[0]}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>
                  {product.prices[0].amount}
                  {product.prices[0].currency.symbol}
                </p>
                <p> {product.description.replace(/(<([^>]+)>)/gi, "")}</p>{" "}
                <button id={product.id} onClick={this.addToCart.bind(this)}>
                  Add to Cart
                </button>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default services.withRouter(Details);
