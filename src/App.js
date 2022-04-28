import React, { Component } from "react";
import All from "./pages/All";
import Clothes from "./pages/Clothes";
import Tech from "./pages/Tech";
import Details from "./pages/Details";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/all" element={<All />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="tech" element={<Tech />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
