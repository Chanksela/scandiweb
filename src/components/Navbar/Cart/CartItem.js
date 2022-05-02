import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import GQL from "../../../services/GQL";
export default class CartItem extends Component {
  render() {
    return (
      <div>
        <Query query={GQL.DETAILS} variables={{ productId: this.props.id }}>
          {({ error, loading, data }) => {
            if (error) return `Error ${error.message}`;
            if (loading) return loading;
            const { product } = data;
            return (
              <div>
                {product != null ? (
                  <div>
                    <p>{product.name}</p>
                    <img
                      alt="item-img"
                      src={product.gallery[0]}
                      style={{ width: "50px" }}
                    />
                    <p>
                      {product.prices[0].amount}
                      {product.prices[0].currency.symbol}
                    </p>
                  </div>
                ) : (
                  "No Items"
                )}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
