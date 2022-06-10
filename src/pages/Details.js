import React, { Component } from "react";
import services from "../services/services";
import GQL from "../services/GQL";
import { Query } from "@apollo/client/react/components";
import "./Details.css";
import Attributes from "../components/Products/ProductsCard/Details/Attributes";

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
              <div className="info-container">
                <div className="info-content">
                  <div className="brand-info">
                    <h2>{product.name}</h2>
                    <h4>{product.brand}</h4>
                  </div>
                  <Attributes
                    product={product}
                    onAttributePick={this.props.onAttributePick}
                  />{" "}
                  <div className="price-description">
                    {" "}
                    <p className="test">Price:</p>
                    <p className="price">
                      {this.props.currency}
                      {product.prices[this.props.amount].amount}
                    </p>
                    <p> {product.description.replace(/(<([^>]+)>)/gi, "")}</p>{" "}
                  </div>
                  <button
                    id="details-add-btn"
                    onClick={(e) => {
                      this.props.onAdd(product, e.target.id);
                    }}
                    disabled={!product.inStock}
                  >
                    {" "}
                    {!product.inStock ? (
                      <p>ITEM IS OUT OF STOCK</p>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default services.withRouter(Details);
