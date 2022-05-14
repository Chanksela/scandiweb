import React, { Component } from "react";
import services from "../services/services";
import GQL from "../services/GQL";
import { Query } from "@apollo/client/react/components";
import "./Details.css";
class Details extends Component {
  constructor() {
    super();
    this.state = { selectedImg: 0 };
  }
  onSelect(arg) {
    this.setState({ selectedImg: arg.target.id });
  }
  render() {
    const id = this.props.params.id;

    return (
      <div className="main-container">
        <Query query={GQL.DETAILS} variables={{ productId: id }}>
          {({ error, loading, data }) => {
            if (error) return `Error ${error.message}`;
            if (loading) return loading;
            const { product } = data;
            const images = product.gallery.map((img) => img);
            return (
              <div className="content">
                {console.log(product)}
                {console.log(product?.attributes)}
                {console.log(product?.attributes[0]?.items)}
                <h2>{product.name}</h2>
                <h4>{product.brand}</h4>
                <div className="img-gallery">
                  <img
                    className="img-main"
                    src={images[this.state.selectedImg]}
                  />
                  <div className="img-picker">
                    {images.map((img, index) => {
                      return (
                        <div key={index}>
                          <img
                            id={index}
                            onClick={(e) => this.onSelect(e)}
                            className="imgs"
                            alt="img"
                            src={img}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                {product.category === "clothes" &&
                  product?.attributes[0].items.map((size) => size.value)}
                {product.category === "tech" &&
                  product.attributes.map((attribute) => {
                    return (
                      <div>
                        {attribute.name}
                        {attribute.items.map((x) => {
                          return <p>{x.value}</p>;
                        })}
                      </div>
                    );
                  })}
                <p>
                  {this.props.currency}
                  {product.prices[this.props.amount].amount}
                </p>
                <p> {product.description.replace(/(<([^>]+)>)/gi, "")}</p>{" "}
                <button
                  id={product.id}
                  onClick={(e) => {
                    this.props.addItem(e.target.id, product);
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
