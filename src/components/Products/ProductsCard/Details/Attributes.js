import React, { Component } from "react";
import "./Attributes.css";
export default class Attributes extends Component {
  render() {
    return (
      <>
        <h2>{this.props.product.name}</h2>
        <h4>{this.props.product.brand}</h4>
        {this.props.product.category === "clothes" &&
          this.props.product?.attributes.map((attribute) => {
            return (
              <div key={attribute.id}>
                {attribute.name}
                {console.log(attribute)}
                {attribute.items.map((size, index) => {
                  return (
                    <button
                      key={size.id}
                      id={index}
                      onClick={(e) => console.log(e.target.id)}
                      className={
                        this.props.capacity === size.id ? "picked-size" : "size"
                      }
                    >
                      {size.value}
                    </button>
                  );
                })}
              </div>
            );
          })}
        {this.props.product.category === "tech" &&
          this.props.product.attributes.map((attribute) => {
            return (
              <div key={attribute.id}>
                {attribute.name}
                {attribute.name === "Color"
                  ? attribute.items.map((v, index) => (
                      <button
                        id={v.id}
                        onClick={(e) => this.props.onColorPick(e)}
                        className={
                          this.props.itemColor === v.id
                            ? "picked-color"
                            : "color"
                        }
                        key={index}
                        style={{
                          backgroundColor: v.value,
                        }}
                      ></button>
                    ))
                  : attribute.items.map((x) => {
                      return (
                        <button
                          id={x.id}
                          key={x.id}
                          onClick={(e) => this.props.onCapacityPick(e)}
                          className={
                            this.props.capacity === x.id
                              ? "picked-capacity"
                              : "capacity"
                          }
                        >
                          {x.value}
                        </button>
                      );
                    })}
              </div>
            );
          })}
      </>
    );
  }
}
