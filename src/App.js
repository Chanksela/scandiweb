import React, { Component } from "react";
import FullPage from "./pages/FullPage";
import Details from "./pages/Details";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage";
import { ProductProvider } from "./services/contex";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      product: [],
      itemsArray: [],
      categories: "all",
      currency: "$",
      amount: 0,
      // attributes
      size: "",
      itemColor: "",
      capacity: "",
      usb: "",
      touchID: "",
      //functions
      onAdd: this.onAdd.bind(this),
      onRemove: this.onRemove.bind(this),
      clearCart: this.clearCart.bind(this),
      selectCategory: this.selectCategory.bind(this),
      totalQty: this.totalQty.bind(this),
      currencyChange: this.currencyChange.bind(this),
      getID: this.getID.bind(this),
      onAttributePick: this.onAttributePick.bind(this),
    };
  }
  getID(arg) {
    this.setState({ id: arg.target.id });
    console.log(this.state.id);
  }
  // test for one functions for all attributes,
  //setState-ის მეორე პარამეტრის გადახედვაა საჭიწრო
  onAttributePick(arg1, arg2) {
    if (arg1.name === "Color") {
      this.setState({ itemColor: arg2.value });
      console.log(this.state.itemColor);
    }
    if (arg1.name === "Capacity") {
      this.setState({ capacity: arg2.value });
      console.log(arg2);
      console.log(this.state.capacity);
    }
    if (arg1.name === "Size") {
      this.setState({ size: arg2.value });
      console.log(this.state.size);
    }
    if (arg1.name === "With USB 3 ports") {
      this.setState({ usb: arg2.value });
      console.log(this.state.usb);
    }
    if (arg1.name === "Touch ID in keyboard") {
      this.setState({ touchID: arg2.value });
      console.log(this.state.touchID);
    }
  }

  // total qty of added items
  totalQty(arg) {
    return arg.itemsArray
      .map((x) => x.qty)
      .reduce((cur, item) => {
        return cur + item;
      }, 0);
  }

  // get item id from details page and add it to the itemsArray
  onAdd(product, size, itemColor, capacity, usb, touchID) {
    console.log(product);
    console.log(this.state.itemsArray);
    const exist =
      this.state.itemsArray.length > 0 &&
      this.state.itemsArray.find(
        (v) =>
          (v.id === product.id && v.size === size) ||
          (v.id === product.id &&
            v.itemColor === itemColor &&
            v.capacity === capacity) ||
          (v.id === product.id &&
            v.capacity === capacity &&
            v.usb === usb &&
            v.touchID === touchID)
      );

    if (exist) {
      product.attributes.length === 1 &&
        this.setState({
          itemsArray: this.state.itemsArray.map((v) =>
            v.id === product.id && v.size === size
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : v
          ),
        });
      product.attributes.length === 2 &&
        this.setState({
          itemsArray: this.state.itemsArray.map((v) =>
            v.id === product.id &&
            v.itemColor === itemColor &&
            v.capacity === capacity
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : v
          ),
        });
      product.attributes.length === 3 &&
        this.setState({
          itemsArray: this.state.itemsArray.map((v) =>
            v.id === product.id
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : v
          ),
        });
    } else if (!exist) {
      product.attributes.length === 1 &&
        this.setState({
          itemsArray: [
            ...this.state.itemsArray,
            {
              ...product,
              qty: 1,
              size: this.state.size,
            },
          ],
        });
      product.attributes.length === 2 &&
        this.setState({
          itemsArray: [
            ...this.state.itemsArray,
            {
              ...product,
              qty: 1,
              itemColor: this.state.itemColor,
              capacity: this.state.capacity,
            },
          ],
        });
      product.attributes.length === 3 &&
        this.setState({
          itemsArray: [
            ...this.state.itemsArray,
            {
              ...product,
              qty: 1,
              capacity: this.state.capacity,
              usb: this.state.usb,
              touchID: this.state.touchID,
            },
          ],
        });
    }
    // this.setState({ size: "", itemColor: "" });
    console.log(this.state.size, this.state.itemColor);
    console.log(exist);
  }
  // functions to decrease amount of items in cart by 1
  onRemove(product, identifier) {
    const exist =
      this.state.itemsArray.length > 0 &&
      this.state.itemsArray.find(
        (v) =>
          (v.id === product.id && v.size === identifier) ||
          (v.id === product.id && v.itemColor === identifier)
      );
    console.log(exist);
    if (exist) {
      exist.qty > 1
        ? this.setState({
            itemsArray: this.state.itemsArray.map((v) =>
              (v.id === product.id && v.size === identifier) ||
              (v.id === product.id && v.itemColor === identifier)
                ? {
                    ...exist,
                    qty: exist.qty - 1,
                    size: exist.size,
                    color: exist.color,
                  }
                : v
            ),
          })
        : this.setState({
            itemsArray: this.state.itemsArray.filter(
              (v) =>
                (v.id !== product.id && v.size !== identifier) ||
                (v.id !== product.id && v.itemColor !== identifier)
            ),
          });
    }
  }

  // function for gettin currency and relevant price
  currencyChange(arg1, arg2) {
    this.setState({ currency: arg1.target.value }, () => {
      this.setState({
        amount: arg2.findIndex((x) => x.symbol === this.state.currency),
      });
    });
  }

  // get category from navbar links to display relevant products
  selectCategory(arg) {
    this.setState({ categories: arg });
  }

  // clear all items from cart
  clearCart() {
    this.setState({ itemsArray: [], counter: 1 });
  }

  render() {
    return (
      <ProductProvider value={this.state}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<FullPage />} />
              <Route
                path="/details/:id"
                element={
                  <Details
                    // states
                    amount={this.state.amount}
                    currency={this.state.currency}
                    size={this.state.size}
                    capacity={this.state.capacity}
                    itemColor={this.state.itemColor}
                    usb={this.state.usb}
                    touchID={this.state.touchID}
                    product={this.state.product}
                    itemsArray={this.state.itemsArray}
                    arg={this.props.arg}
                    // functions
                    onAdd={this.onAdd.bind(this)}
                    onAttributePick={this.onAttributePick.bind(this)}
                  />
                }
              />
              <Route path="/cartitems" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </ProductProvider>
    );
  }
}

export default App;
