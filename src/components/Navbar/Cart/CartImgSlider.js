import React, { Component } from "react";

export default class CartImgSlider extends Component {
  render() {
    return (
      <div className="slide-btn">
        {console.log(this.props.product.gallery)}
        {this.props.product.gallery.length > 1 && (
          <>
            <img
              alt="product-img"
              src={this.props.PrevBtn}
              id="prev"
              className="sliderBtn"
              onClick={this.props.function}
            />
            <img
              alt="product-img"
              src={this.props.NextBtn}
              className="sliderBtn"
              id="next"
              onClick={this.props.function}
            />
          </>
        )}
      </div>
    );
  }
}
