import React, { Component } from "react";
import "./Attributes.css";
export default class TechAttributes extends Component {
  render() {
    return (
      <div key={this.props.attribute.id}>
        {this.props.attribute.name}
        {this.props.attribute.name === "Color"
          ? this.props.attribute.items.map((v, index) => (
              <button
                id={v.id}
                onClick={(e) => this.props.onColorPick(e)}
                className={
                  this.props.itemColor === v.id ? "picked-color" : "color"
                }
                key={index}
                style={{
                  backgroundColor: v.value,
                }}
              ></button>
            ))
          : this.props.attribute.items.map((x) => {
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
  }
}
