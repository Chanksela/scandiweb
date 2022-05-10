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
      currency: "$",
      amount: 0,
      cart: false,
    };
  }
  // handleCart
  handleCart() {
    console.log("clicked");
    this.setState((curState) => {
      console.log(curState);
      return { cart: !curState.cart };
    });
  }
  // function for gettin currency and relevant price
  currencyChange(arg1, arg2) {
    this.setState({ currency: arg1.target.value }, () => {
      this.setState({
        amount: arg2.findIndex((x) => x.symbol === this.state.currency),
      });
    });
  }
  // get item id from details page and add it to the itemsArray
  addItem(arg1, arg2) {
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
    this.setState({ itemsArray: [], counter: 1 });
  }
  // functions to increase amount of items in cart by 1
  increaseItem() {
    this.setState({ counter: this.state.counter + 1 });
  }
  // functions to decrease amount of items in cart by 1
  decreaseItem() {
    console.log(this.state.counter);
    if (this.state.counter === 1) {
      console.log("it's zero");
    }
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <ProductProvider value={{ ...this.state, addItem: this.addItem }}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Navbar
              // states
              cart={this.state.cart}
              amount={this.state.amount}
              currency={this.state.currency}
              itemsArray={this.state.itemsArray}
              itemID={this.state.addedItem}
              counter={this.state.counter}
              // functions
              handleCart={this.handleCart.bind(this)}
              currencyChange={this.currencyChange.bind(this)}
              increaseItem={this.increaseItem.bind(this)}
              decreaseItem={this.decreaseItem.bind(this)}
              clearCart={this.clearCart.bind(this)}
              selectCategory={this.selectCategory.bind(this)}
              cartArray={this.cartArray.bind(this)}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <FullPage
                    // states
                    amount={this.state.amount}
                    categories={this.state.categories}
                    currency={this.state.currency}
                  />
                }
              />
              <Route
                path="/details/:id"
                element={
                  <Details
                    // states
                    amount={this.state.amount}
                    currency={this.state.currency}
                    // functions
                    addItem={this.addItem.bind(this)}
                  />
                }
              />
              <Route
                path="/cartitems"
                element={
                  <CartList
                    // states
                    amount={this.state.amount}
                    currency={this.state.currency}
                    itemsArray={this.state.itemsArray}
                    // functions
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
