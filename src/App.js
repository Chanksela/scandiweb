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
      addedItem: "",
      itemArray: [],
      counter: "",
      categories: "",
    };
  }
  // get item id from details page
  getID(arg) {
    this.setState({ addedItem: arg });
    this.setState({ counter: this.state.addedItem.length });
  }
  // get category from navbar links to display relevant products
  selectCategory(arg) {
    this.setState({ categories: arg });
  }
  // create an array of added items
  cartArray(arg) {
    this.state.itemArray.push(arg);
    console.log(this.state.itemArray);
  }

  render() {
    return (
      <ProductProvider value={(this.state.categories, this.state.addedItem)}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Navbar
              itemID={this.state.addedItem}
              itemArray={this.state.itemArray}
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
                    id={this.state.addedItem}
                    getID={this.getID.bind(this)}
                  />
                }
              />
              <Route path="/cartitems" element={<CartList />} />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </ProductProvider>
    );
  }
}

export default App;
