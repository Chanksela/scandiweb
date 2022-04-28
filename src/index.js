import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import All from "./pages/All";
import Clothes from "./pages/Clothes";
import Tech from "./pages/Tech";
import Details from "./pages/Details";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="all" element={<All />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="tech" element={<Tech />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
