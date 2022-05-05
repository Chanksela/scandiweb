import React, { Component } from "react";
import All from "./pages/All";
import Clothes from "./pages/Clothes";
import Tech from "./pages/Tech";
import FullPage from "./pages/FullPage";
import Details from "./pages/Details";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar/Navbar";
import CartList from "./pages/CartList";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      addedItem: "",
      counter: "",
      categories: "all",
    };
  }

  addToCart(arg) {
    // this.state.addedItem.push(e.target.id);
    this.setState({ addedItem: arg });
    this.setState({ counter: this.state.addedItem.length });
    // console.log(this.state.counter);
  }
  selectCategory(arg) {
    this.setState({ categories: arg });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navbar
            itemID={this.state.addedItem}
            counter={this.state.counter}
            selectCategory={this.selectCategory.bind(this)}
            categories={this.state.categories}
          />
          <Routes>
            {/* <Route path="/" element={<All />} />
            <Route path="/all" element={<All />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="tech" element={<Tech />} /> */}
            <Route
              path="/"
              element={<FullPage categories={this.state.categories} />}
            />
            <Route
              path="/details/:id"
              element={
                <Details
                  id={this.state.addedItem}
                  addToCart={this.addToCart.bind(this)}
                />
              }
            />
            <Route path="/cartitems" element={<CartList />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
