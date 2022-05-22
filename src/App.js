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
      size: "",
      itemColor: "",
      capacity: "",
      withKeyboard: "",
      onAdd: this.onAdd.bind(this),
      onRemove: this.onRemove.bind(this),
      clearCart: this.clearCart.bind(this),
      selectCategory: this.selectCategory.bind(this),
      totalQty: this.totalQty.bind(this),
      currencyChange: this.currencyChange.bind(this),
      getID: this.getID.bind(this),
      onColorPick: this.onColorPick.bind(this),
    };
  }
  getID(arg) {
    this.setState({ id: arg.target.id });
    console.log(this.state.id);
  }
  onSizePick(arg) {
    this.setState({ size: arg.target.id });
    console.log(arg.target.id);
    console.log(this.state.size);
  }
  // chosen color
  onCapacityPick(arg) {
    this.setState({ capacity: arg.target.id });
    console.log(arg.target.id);
    console.log(this.state.itemColor);
  }
  // chosen color
  onColorPick(arg) {
    this.setState({ itemColor: arg.target.id });
    console.log(arg.target.id);
    console.log(this.state.capacity);
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
  onAdd(arg1, arg2, arg3) {
    const exist =
      this.state.itemsArray.length > 0 &&
      this.state.itemsArray.find((x) => x.id === arg1);
    // conditions to add an item
    if (!arg2.inStock) {
      alert("Sorry, this item is out of stock");
    } else if (
      arg2.category === "clothes" &&
      arg2.attributes.length > 0 &&
      arg3 === ""
    ) {
      alert("choose size");
    } else if (
      arg2.category === "tech" &&
      arg2.attributes.length > 0 &&
      arg3 === ""
    ) {
      alert("choose a color");
    } else if (exist) {
      this.setState({
        itemsArray: this.state.itemsArray.map((x) =>
          x.id === arg2.id ? { ...exist, qty: exist.qty + 1 } : x
        ),
      });
    } else {
      this.setState({
        itemsArray: [
          ...this.state.itemsArray,
          {
            ...arg2,
            qty: 1,
            size: this.state.size,
            color: this.state.itemColor,
          },
        ],
      });
      this.setState({ itemColor: "" });
      this.setState({ size: "" });
    }
    console.log(this.state.itemsArray);
  }
  // functions to decrease amount of items in cart by 1
  onRemove(arg1, arg2) {
    const exist =
      this.state.itemsArray.length > 0 &&
      this.state.itemsArray.find((x) => x.id === arg1);
    if (exist) {
      exist.qty > 1
        ? this.setState({
            itemsArray: this.state.itemsArray.map((x) =>
              x.id === arg2.id ? { ...exist, qty: exist.qty - 1 } : x
            ),
          })
        : this.setState({
            itemsArray: this.state.itemsArray.filter((x) => x.id !== arg2.id),
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
                    itemColor={this.state.itemColor}
                    capacity={this.state.capacity}
                    size={this.state.size}
                    product={this.state.product}
                    itemsArray={this.state.itemsArray}
                    // functions
                    onSizePick={this.onSizePick.bind(this)}
                    onColorPick={this.onColorPick.bind(this)}
                    onCapacityPick={this.onCapacityPick.bind(this)}
                    onAdd={this.onAdd.bind(this)}
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
