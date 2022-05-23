import React, { Component } from "react";
import "./Attributes.css";
export default class TechAttributes extends Component {
  render() {
    return (
      <div>
        {this.props.attribute.name}
        {this.props.attribute.name === "Color"
          ? this.props.attribute.items.map((v, index) => (
              <button
                key={index}
                id={v.id}
                onClick={(e) => this.props.onColorPick(e)}
                className={
                  this.props.itemColor === v.id ? "picked-color" : "color"
                }
                style={{
                  backgroundColor: v.value,
                }}
              ></button>
            ))
          : this.props.attribute.items.map((x, index) => {
              return (
                <button
                  key={index}
                  id={x.id}
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
  }
}
