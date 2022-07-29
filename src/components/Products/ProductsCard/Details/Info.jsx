import React, { Component } from "react";
import Attributes from "./Attributes";
import Button from "../../../Button/Button";
import "./Info.css";
export default class Info extends Component {
  render() {
    return (
      <div className="info-container">
        <div className="info-content">
          <div className="brand-info">
            {console.log(this.props.product)}
            <h2>{this.props.product.name}</h2>
            <h4>{this.props.product.brand}</h4>
          </div>
          <Attributes
            product={this.props.product}
            onAttributePick={this.props.onAttributePick}
          />{" "}
          <div className="price-description">
            <p className="test">Price:</p>
            <p className="price">
              {this.props.currency}
              {this.props.product.prices[this.props.amount].amount}
            </p>{" "}
          </div>
          <div>
            <Button
              id="details-add-btn"
              function={(e) =>
                this.props.onAdd(this.props.product, e.target.id)
              }
              content={
                !this.props.product.inStock ? (
                  <p>ITEM IS OUT OF STOCK</p>
                ) : (
                  "Add to Cart"
                )
              }
              disabled={!this.props.product.inStock}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.product.description,
            }}
          />
        </div>
      </div>
    );
  }
}
