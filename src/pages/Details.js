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
              <div className="info">
                {" "}
                <h2>{product.name}</h2>
                <h4>{product.brand}</h4>
                <Attributes
                  product={product}
                  size={this.props.size}
                  onAttributePick={this.props.onAttributePick}
                />{" "}
                <>
                  <p>
                    {this.props.currency}
                    {product.prices[this.props.amount].amount}
                  </p>
                  <p> {product.description.replace(/(<([^>]+)>)/gi, "")}</p>{" "}
                  <button
                    onClick={() => {
                      this.props.onAdd(
                        product,
                        this.props.size,
                        this.props.itemColor,
                        this.props.capacity,
                        this.props.usb,
                        this.props.touchID
                      );
                    }}
                    disabled={!product.inStock}
                  >
                    {" "}
                    {!product.inStock ? (
                      <p className="error">ITEM IS OUT OF STOCK</p>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                </>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default services.withRouter(Details);
