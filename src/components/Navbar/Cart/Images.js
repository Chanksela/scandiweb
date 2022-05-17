import React, { Component } from "react";

export default class CartItem extends Component {
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
        <ul>
          <li>
            <button
              id="next"
              onClick={(e) =>
                this.slide(e.target.id, this.props.product.gallery)
              }
            >
              Next
            </button>
            <img
              alt="item-img"
              src={this.props.product.gallery?.[this.state.index]}
              style={{ width: "50px" }}
            />
            <button
              id="prev"
              onClick={(e) =>
                this.slide(e.target.id, this.props.product.gallery)
              }
            >
              Prev
            </button>
            <p>
              {this.props.product.prices[this.props.state.amount].amount}
              {this.props.state.currency}
            </p>
            <div>
              <button
                id={this.props.product.id}
                onClick={(e) =>
                  this.props.onRemove(e.target.id, this.props.product)
                }
              >
                -
              </button>

              <p>{this.props.product.qty}</p>
              <button
                id={this.props.product.id}
                onClick={(e) =>
                  this.props.onAdd(e.target.id, this.props.product)
                }
              >
                +
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
