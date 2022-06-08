import React, { Component } from "react";
import "./Attributes.css";

export default class Attributes extends Component {
  render() {
    return (
      <>
        {this.props.product.attributes.map((v, index) => {
          return (
            <div className="main-content" key={index}>
              <div className="attributes">
                <p className="attr-name">{v.name}</p>
                {v.items.map((attr, index) => (
                  <button
                    style={{
                      backgroundColor: attr.value,
                    }}
                    className="attr"
                    key={index}
                    onClick={() =>
                      this.props.onAttributePick(v, attr, this.props.product)
                    }
                  >
                    {v.name !== "Color" && attr.displayValue}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
