import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import GQL from "../../../services/GQL";
export default class CartItem extends Component {
  render() {
    return (
      <div>
        <Query query={GQL.DETAILS} variables={{ productId: this.props.itemID }}>
          {({ error, loading, data }) => {
            if (error) return `Error ${error.message}`;
            if (loading) return loading;
            const { product } = data;

            product != null && this.props.cartArray(product);

            console.log(this.props.itemArray.length);
            return (
              <div>
                {product != null
                  ? this.props.itemArray.map((v) => (
                      <div>
                        <p>{v.name}</p>
                        <img
                          alt="item-img"
                          src={v.gallery[0]}
                          style={{ width: "50px" }}
                        />
                        <p>
                          {v.prices[0].amount}
                          {v.prices[0].currency.symbol}
                        </p>
                      </div>
                    ))
                  : "No Items Added"}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
