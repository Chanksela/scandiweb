import React, { Component } from "react";
import services from "../services/services";
import GQL from "../services/GQL";
import { Query } from "@apollo/client/react/components";

class Details extends Component {
  render() {
    const id = this.props.params.id;

    return (
      <div>
        <h3>ID: {this.props.id}</h3>
        <Query query={GQL.DETAILS} variables={{ productId: id }}>
          {({ error, loading, data }) => {
            if (error) return `Error ${error.message}`;
            if (loading) return loading;
            const { product } = data;
            const images = product.gallery.map((img) => img);
            console.log(images);
            return (
              <div>
                <h2>{product.name}</h2>
                <h4>{product.brand}</h4>
                {images.map((img, index) => {
                  console.log(index);
                  return (
                    <div key={index}>
                      {" "}
                      <img
                        className="images"
                        alt="img"
                        src={img}
                        style={{ width: "50px" }}
                      />
                    </div>
                  );
                })}
                <p>
                  {product.prices[0].amount}
                  {product.prices[0].currency.symbol}
                </p>
                <p> {product.description.replace(/(<([^>]+)>)/gi, "")}</p>{" "}
                <button
                  id={product.id}
                  onClick={(e) => {
                    this.props.addToCart(e.target.id);
                    console.log(this.props.id);
                  }}
                >
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
