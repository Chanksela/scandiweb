import React, { Component } from "react";
import "./Attributes.css";
import ClothesAttributes from "./ClothesAttributes";
import TechAttributes from "./TechAttributes";
export default class Attributes extends Component {
  render() {
    return (
      <>
        <h2>{this.props.product.name}</h2>
        <h4>{this.props.product.brand}</h4>
        {this.props.product.category === "clothes" &&
          this.props.product?.attributes.map((attribute) => {
            return (
              <ClothesAttributes
                product={this.props.product}
                attribute={attribute}
                onSizePick={this.props.onSizePick}
                size={this.props.size}
              />
            );
          })}
        {this.props.product.category === "tech" &&
          this.props.product.attributes.map((attribute) => {
            return (
              <TechAttributes
                itemColor={this.props.itemColor}
                capacity={this.props.capacity}
                attribute={attribute}
                onCapacityPick={this.props.onCapacityPick}
                onColorPick={this.props.onColorPick}
              />
            );
          })}
      </>
    );
  }
}
