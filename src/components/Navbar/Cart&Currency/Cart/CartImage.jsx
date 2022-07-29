import React, { Component } from "react";
import PrevBtn from "../../../../Images/Prev.png";
import NextBtn from "../../../../Images/Next.png";
import Button from "../../../Button/Button";
import CartImgSlider from "./CartImgSlider";
export default class CartImage extends Component {
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
      <>
        <div className="itemQty">
          <Button
            id={this.props.product.id}
            className="qtyBtn"
            function={() => this.props.state.onRemove(this.props.product)}
            content="-"
          />
          <p>{this.props.product.qty}</p>
          <Button
            id="cart-add-btn"
            className="qtyBtn"
            function={(e) =>
              this.props.state.onAdd(this.props.product, e.target.id)
            }
            content="+"
          />
        </div>
        <div className="image">
          <img
            alt="product-img"
            className="cart-img"
            src={this.props.product.gallery?.[this.state.index]}
          />{" "}
          <CartImgSlider
            product={this.props.product}
            PrevBtn={PrevBtn}
            NextBtn={NextBtn}
            function={(e) =>
              this.slide(e.target.id, this.props.product.gallery)
            }
          />
        </div>
      </>
    );
  }
}
