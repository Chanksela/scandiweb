import React, { Component } from "react";
import FullPage from "./pages/FullPage";
import Details from "./pages/Details";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar/Navbar";
import CartList from "./pages/CartList";
import { ProductProvider } from "./services/contex";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      itemsArray: [],
      addedItem: "",
      counter: 1,
      categories: "",
    };
  }
  // get item id from details page and add it to the itemsArray
  addItem(arg1, arg2, prevState) {
    this.setState({ addedItem: arg1 });

    const exist =
      this.state.itemsArray.length > 0 &&
      this.state.itemsArray.find((x) => x.id === arg2.id);
    console.log(exist);
    if (exist) {
      this.setState({ counter: this.state.counter + 1 });
      console.log(this.state.counter);
    } else {
      this.state.itemsArray.push(arg2);
    }

    this.state.itemsArray.find((x) => x.id === arg1 && console.log("it works"));
  }
  // get category from navbar links to display relevant products
  selectCategory(arg) {
    this.setState({ categories: arg });
  }
  // create an array of added items
  cartArray(arg) {
    this.state.itemsArray.push(arg);
    console.log(this.state.itemsArray);
    // this.setState({ addedItem: "" });
  }
  // clear all items from cart
  clearCart() {
    this.setState({ itemsArray: [] });
  }

  render() {
    return (
      <ProductProvider value={(this.state.categories, this.state.addedItem)}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Navbar
              clearCart={this.clearCart.bind(this)}
              itemsArray={this.state.itemsArray}
              itemID={this.state.addedItem}
              counter={this.state.counter}
              selectCategory={this.selectCategory.bind(this)}
              cartArray={this.cartArray.bind(this)}
            />
            <Routes>
              <Route
                path="/"
                element={<FullPage categories={this.state.categories} />}
              />
              <Route
                path="/details/:id"
                element={
                  <Details
                    itemsArray={this.state.itemsArray}
                    id={this.state.addedItem}
                    addItem={this.addItem.bind(this)}
                  />
                }
              />
              <Route
                path="/cartitems"
                element={
                  <CartList
                    itemsArray={this.state.itemsArray}
                    clearCart={this.clearCart.bind(this)}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </ProductProvider>
    );
  }
}

export default App;
