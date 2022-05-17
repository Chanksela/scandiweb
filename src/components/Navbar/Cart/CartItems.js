import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../services/contex";
import Images from "./Images";
export default class CartItem extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.slide = this.slide.bind(this);
  }

  slide(arg, arg2) {
    if (arg === "next") {
      this.setState({ index: (this.state.index += 1) });
      if (this.state.index >= arg2.length) {
        this.setState({ index: 0 });
      }
    }
    if (arg === "prev") {
      this.setState({ index: (this.state.index -= 1) });
      if (this.state.index <= 0) {
        this.setState({ index: arg2.length - 1 });
      }
    }
  }
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return state.itemsArray.length > 0 ? (
            <div>
              {state.itemsArray.map((product, index) => (
                <Images
                  key={index}
                  product={product}
                  index={index}
                  state={state}
                  onAdd={this.props.onAdd}
                  onRemove={this.props.onRemove}
                />
              ))}
              <button onClick={this.props.clearCart}>Clear All</button>
              <Link to={"/cartitems"}>Shop</Link>
            </div>
          ) : (
            "Nothing to Show"
          );
        }}
      </ProductConsumer>
    );
  }
}
