import React, { Component } from "react";
import services from "../services/services";
import GQL from "../services/GQL";
import { Query } from "@apollo/client/react/components";
import "./Details.css";
import { ProductConsumer } from "../services/contex";

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
      <Query query={GQL.DETAILS} variables={{ productId: id }}>
        {({ error, loading, data }) => {
          if (error) return `Error ${error.message}`;
          if (loading) return loading;
          const { product } = data;
          const images = product.gallery.map((img) => img);
          return (
            <div className="content">
              <div className="images">
                <div className="img-gallery">
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
                  </div>{" "}
                  <img
                    alt="main-img"
                    className="img-main"
                    src={images[this.state.selectedImg]}
                  />
                </div>
              </div>
              <div className="info">
                <h2>{product.name}</h2>
                <h4>{product.brand}</h4>
                {product.category === "clothes" &&
                  product?.attributes.map((attribute) => {
                    return (
                      <div key={attribute.id}>
                        {attribute.name}
                        {attribute.items.map((size) => {
                          return <button key={size.id}>{size.value}</button>;
                        })}
                      </div>
                    );
                  })}
                {product.category === "tech" &&
                  product.attributes.map((attribute) => {
                    return (
                      <div key={attribute.id}>
                        {attribute.name}
                        {attribute.items.map((x) => {
                          return <button key={x.id}>{x.value}</button>;
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
                    this.props.onAdd(e.target.id, product);
                  }}
                >
                  Add to Cart
                </button>
                {
                  <ProductConsumer>
                    {(state) => (
                      <button
                        id="test"
                        onClick={(e) => state.test(e.target.id, product)}
                      >
                        Test
                      </button>
                    )}
                  </ProductConsumer>
                }
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default services.withRouter(Details);
