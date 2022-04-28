import React, { Component } from "react";
import services from "../services/services";
import GQL from "../services/GQL";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Mutation } from "@apollo/client/react/components";

class Details extends Component {
  render() {
    const id = this.props.params.id;
    console.log(id.toString());

    return (
      <div>
        <h1>Product ID: {id}</h1>
        <Query query={GQL.DETAILS} variables={{ productId: id }}>
          {({ error, loading, data }) => {
            if (error) return `Error ${error.message}`;
            if (loading) return loading;
            const { product } = data;
            console.log(product);
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
                <p> {product.description.replace(/(<([^>]+)>)/gi, "")}</p>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default services.withRouter(Details);
