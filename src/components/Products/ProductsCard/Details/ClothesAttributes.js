import React, { Component } from "react";

export default class ClothesAttributes extends Component {
  render() {
    return (
      <div>
        {/* {this.props.attribute.name} */}
        {console.log(this.props.product)}
        {this.props.attribute.items.map((size, index) => {
          return (
            <button
              key={index}
              id={size.id}
              onClick={(e) => this.props.onSizePick(e)}
              className={this.props.size === size.id ? "picked-size" : "size"}
            >
              {size.value}
            </button>
          );
        })}
      </div>
    );
  }
}
