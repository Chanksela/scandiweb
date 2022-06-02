import React, { Component } from "react";

export default class CartImages extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.slide = this.slide.bind(this);
  }

  slide(arg, arg2) {
    if (arg === "next") {
      this.setState({ index: this.state.index + 1 });
      if (this.state.index >= arg2.length - 1) {
        this.setState({ index: 0 });
      }
    }
    if (arg === "prev") {
      this.setState({ index: this.state.index - 1 });
      if (this.state.index <= 0) {
        this.setState({ index: arg2.length - 1 });
      }
    }
  }
  render() {
    return (
      <div>
        {this.props.product.gallery.length > 1 && (
          <button
            id="next"
            onClick={(e) => this.slide(e.target.id, this.props.product.gallery)}
          >
            Next
          </button>
        )}

        <img
          alt="item-img"
          src={this.props.product.gallery?.[this.state.index]}
          style={{ width: "50px" }}
        />
        {this.props.product.gallery.length > 1 && (
          <button
            id="prev"
            onClick={(e) => this.slide(e.target.id, this.props.product.gallery)}
          >
            Prev
          </button>
        )}
      </div>
    );
  }
}
