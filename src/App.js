import React, { Component } from "react";
import All from "./pages/All";
import Clothes from "./pages/Clothes";
import Tech from "./pages/Tech";
import Details from "./pages/Details";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
    };
  }

  addToCart(arg) {
    // this.state.addedItem.push(e.target.id);
    this.setState({ addedItem: arg.target.id });
    console.log(this.state.addedItem);
    // this.setState({ counter: this.state.addedItem.length });
    // console.log(this.state.counter);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navbar test="" />
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/all" element={<All />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="tech" element={<Tech />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cartitems" element={<CartList />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
