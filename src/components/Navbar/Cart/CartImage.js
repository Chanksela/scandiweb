import React, { Component } from "react";

export default class CartImage extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.slide = this.slide.bind(this);
  }

  slide(arg, arg2) {
    if (arg === "next") {
      console.log("next");
      console.log(arg);
      console.log(arg2);
      this.setState({ index: this.state.index + 1 });
      if (this.state.index >= arg2.length) {
        this.setState({ index: 0 });
      }
    }
    if (arg === "prev") {
      console.log("prev");
      console.log(arg);
      console.log(arg2);
      this.setState({ index: this.state.index - 1 });
      if (this.state.index <= 0) {
        this.setState({ index: arg2.length - 1 });
      }
    }
  }
  render() {
    return (
      <>
        <section className="itemQty">
          <button
            id={this.props.product.id}
            onClick={() => this.props.state.onRemove(this.props.product)}
          >
            -
          </button>
          <p>{this.props.product.qty}</p>

          <button
            id="cart-add-btn"
            onClick={(e) =>
              this.props.state.onAdd(this.props.product, e.target.id)
            }
          >
            +
          </button>
        </section>
        <section className="image">
          <img
            alt="product-img"
            className="cart-img"
            src={this.props.product.gallery?.[this.state.index]}
          />{" "}
          {this.props.product.gallery.length > 1 && (
            <>
              {" "}
              <button
                id="prev"
                onClick={(e) =>
                  this.slide(e.target.id, this.props.product.gallery)
                }
              >
                PREV
              </button>
              <button
                id="next"
                onClick={(e) =>
                  this.slide(e.target.id, this.props.product.gallery)
                }
              >
                NEXT
              </button>
            </>
          )}
        </section>
      </>
    );
  }
}
