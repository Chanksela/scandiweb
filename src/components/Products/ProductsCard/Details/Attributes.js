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
                {v.name}:
                <div>
                  {v.items.map((attr, index) => (
                    <button
                      style={{
                        backgroundColor: attr.value,
                      }}
                      className="attr"
                      id={v.name}
                      key={index}
                      onClick={(e) =>
                        this.props.onAttributePick(v, attr, e.target.id)
                      }
                    >
                      {v.name !== "Color" && attr.value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
