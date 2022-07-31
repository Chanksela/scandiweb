import React, { Component } from "react";
import Details from "./pages/Details";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage";
import { ProductProvider } from "./services/contex";
import PLP from "./pages/PLP";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
class App extends Component {
  componentDidMount() {
    sessionStorage.getItem("page") === null &&
      this.setState({ category: "all" });
  }
  constructor() {
    super();
    this.state = {
      product: [],
      itemsArray: [],
      category: sessionStorage.getItem("page"),
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

      onAttributePick: this.onAttributePick.bind(this),
    };
  }

  getID(arg) {
    this.setState({ id: arg });
    console.log("Got ID");
    // console.log(this.state.id);
  }
  // test for one functions for all attributes,
  //setState-ის მეორე პარამეტრის გადახედვაა საჭიწრო
  onAttributePick(arg1, arg2, id) {
    // console.log(id);
    if (arg1.name === "Color") {
      this.setState({ itemColor: arg2.value });
      // console.log(this.state.itemColor);
    }
    if (arg1.name === "Capacity") {
      this.setState({ capacity: arg2.displayValue });
      // console.log(this.state.capacity);
    }
    if (arg1.name === "Size") {
      this.setState({ size: arg2.displayValue });
      // console.log(this.state.size);
    }
    if (arg1.name === "With USB 3 ports") {
      this.setState({ usb: arg2.displayValue });
      // console.log(this.state.usb);
    }
    if (arg1.name === "Touch ID in keyboard") {
      this.setState({ touchID: arg2.displayValue });
      // console.log(this.state.touchID);
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

  // adding or increasing product
  onAdd(productInfo, id) {
    console.log(productInfo);
    // items with no attributes
    if (productInfo.attributes.length === 0) {
      const exist =
        this.state.itemsArray.length > 0 &&
        this.state.itemsArray.find((item) => item.id === productInfo.id);
      if (!exist) {
        this.setState({
          itemsArray: [...this.state.itemsArray, { ...productInfo, qty: 1 }],
        });
      } else if (exist) {
        this.setState({
          itemsArray: this.state.itemsArray.map((product) =>
            product.id === productInfo.id
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : product
          ),
        });
      }
    }
    // items with 1 attributes
    if (productInfo.attributes.length === 1 && this.state.size !== "") {
      const exist =
        this.state.itemsArray.length > 0 &&
        this.state.itemsArray.find(
          (item) =>
            (item.id === productInfo.id && item.size === this.state.size) ||
            (item.id === productInfo.id && item.size === productInfo.size)
        );
      if (!exist && id === "details-add-btn") {
        // console.log("Doesn't Exist");
        this.setState({
          itemsArray: [
            ...this.state.itemsArray,
            {
              ...productInfo,
              qty: 1,
              size: this.state.size,
            },
          ],
        });
      } else if (exist && id === "details-add-btn") {
        this.setState({
          itemsArray: this.state.itemsArray.map((product) =>
            product.id === productInfo.id && product.size === this.state.size
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : product
          ),
        });
      } else if (exist && id === "cart-add-btn") {
        this.setState({
          itemsArray: this.state.itemsArray.map((product) =>
            product.id === productInfo.id && product.size === productInfo.size
              ? {
                  ...productInfo,
                  qty: productInfo.qty + 1,
                }
              : product
          ),
        });
      }
    }
    // items with 2 attributes
    if (
      productInfo.attributes.length === 2 &&
      this.state.capacity !== "" &&
      this.state.itemColor !== ""
    ) {
      const exist =
        this.state.itemsArray.length > 0 &&
        this.state.itemsArray.find(
          (item) =>
            (item.id === productInfo.id &&
              item.capacity === this.state.capacity &&
              item.itemColor === this.state.itemColor) ||
            (item.id === productInfo.id &&
              item.capacity === productInfo.capacity &&
              item.itemColor === productInfo.itemColor)
        );
      if (!exist && id === "details-add-btn") {
        this.setState({
          itemsArray: [
            ...this.state.itemsArray,
            {
              ...productInfo,
              qty: 1,
              capacity: this.state.capacity,
              itemColor: this.state.itemColor,
            },
          ],
        });
      } else if (exist && id === "details-add-btn") {
        this.setState({
          itemsArray: this.state.itemsArray.map((product) =>
            product.id === productInfo.id &&
            product.capacity === this.state.capacity &&
            product.itemColor === this.state.itemColor
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                  capacity: exist.capacity,
                  itemColor: exist.itemColor,
                }
              : product
          ),
        });
      } else if (exist && id === "cart-add-btn") {
        this.setState({
          itemsArray: this.state.itemsArray.map((product) =>
            product.id === productInfo.id &&
            product.capacity === productInfo.capacity &&
            product.itemColor === productInfo.itemColor
              ? {
                  ...productInfo,
                  qty: productInfo.qty + 1,
                }
              : product
          ),
        });
      }
    }
    // items with 3 attributes
    if (
      productInfo.attributes.length === 3 &&
      this.state.capacity !== "" &&
      this.state.usb !== "" &&
      this.state.touchID !== ""
    ) {
      const exist =
        this.state.itemsArray.length > 0 &&
        this.state.itemsArray.find(
          (item) =>
            (item.id === productInfo.id &&
              item.capacity === this.state.capacity &&
              item.usb === this.state.usb &&
              item.touchID === this.state.touchID) ||
            (item.id === productInfo.id &&
              item.capacity === productInfo.capacity &&
              item.usb === productInfo.usb &&
              item.touchID === productInfo.touchID)
        );
      if (!exist && id === "details-add-btn") {
        this.setState({
          itemsArray: [
            ...this.state.itemsArray,
            {
              ...productInfo,
              qty: 1,
              capacity: this.state.capacity,
              usb: this.state.usb,
              touchID: this.state.touchID,
            },
          ],
        });
      } else if (exist && id === "details-add-btn") {
        this.setState({
          itemsArray: this.state.itemsArray.map((product) =>
            product.id === productInfo.id &&
            product.capacity === this.state.capacity &&
            product.usb === this.state.usb &&
            product.touchID === this.state.touchID
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                  capacity: exist.capacity,
                  usb: exist.usb,
                  touchID: exist.touchID,
                }
              : product
          ),
        });
      } else if (exist && id === "cart-add-btn") {
        this.setState({
          itemsArray: this.state.itemsArray.map((product) =>
            product.id === productInfo.id &&
            product.capacity === productInfo.capacity &&
            product.usb === productInfo.usb &&
            product.touchID === productInfo.touchID
              ? {
                  ...productInfo,
                  qty: productInfo.qty + 1,
                }
              : product
          ),
        });
      }
    }
  }
  // functions to decrease amount of product in cart by 1
  onRemove(productInfo) {
    // items with 0 attributes
    if (productInfo.attributes.length === 0) {
      if (productInfo && productInfo.qty > 1) {
        this.setState({
          itemsArray: this.state.itemsArray.map((v) =>
            v.id === productInfo.id
              ? {
                  ...productInfo,
                  qty: v.qty - 1,
                }
              : v
          ),
        });
      } else {
        this.setState({
          itemsArray: this.state.itemsArray.filter(
            (v) => v.id !== productInfo.id
          ),
        });
      }
    }
    // items with 1 attribute
    if (productInfo.attributes.length === 1) {
      if (productInfo.qty > 1) {
        this.setState({
          itemsArray: this.state.itemsArray.map((v) =>
            v.id === productInfo.id && v.size === productInfo.size
              ? {
                  ...productInfo,
                  qty: productInfo.qty - 1,
                }
              : v
          ),
        });
      } else {
        this.setState({
          itemsArray: this.state.itemsArray.filter(
            (v) => v.size !== productInfo.size
          ),
        });
      }
    }

    // items with 2 attributes
    if (
      productInfo.attributes.length === 2 &&
      productInfo.capacity !== "" &&
      productInfo.itemColor !== ""
    ) {
      console.log(productInfo.capacity, productInfo.itemColor);
      if (productInfo.qty > 1) {
        this.setState({
          itemsArray: this.state.itemsArray.map((v) =>
            v.capacity === productInfo.capacity &&
            v.itemColor === productInfo.itemColor
              ? { ...productInfo, qty: v.qty - 1 }
              : v
          ),
        });
      } else {
        this.setState({
          itemsArray: this.state.itemsArray.filter(
            (v) =>
              v.itemColor !== productInfo.itemColor ||
              v.capacity !== productInfo.capacity
          ),
        });
      }
    }
    // items with 3 attributes
    if (
      productInfo.attributes.length === 3 &&
      productInfo.capacity !== "" &&
      productInfo.usb !== "" &&
      productInfo.touchID !== ""
    ) {
      if (productInfo.qty > 1) {
        this.setState({
          itemsArray: this.state.itemsArray.map((v) =>
            v.capacity === productInfo.capacity &&
            v.usb === productInfo.usb &&
            v.touchID === productInfo.touchID
              ? { ...productInfo, qty: v.qty - 1 }
              : v
          ),
        });
      } else {
        this.setState({
          itemsArray: this.state.itemsArray.filter(
            (v) =>
              v.capacity !== productInfo.capacity ||
              v.usb !== productInfo.usb ||
              v.touchID !== productInfo.touchID
          ),
        });
      }
    }
  }
  // function for gettin currency and relevant price
  currencyChange(arg1, arg2) {
    this.setState({ currency: arg1.target.id }, () => {
      this.setState({
        amount: arg2.findIndex((x) => x.symbol === this.state.currency),
      });
    });

    console.log("arg1: ", arg1.target.id, "arg2: ", arg2);
  }

  // get category from navbar links to display relevant products
  selectCategory(arg) {
    sessionStorage.setItem("page", arg);
    this.setState({ category: sessionStorage.getItem("page") });
    console.log(this.state.category);
    console.log(window.location.pathname);

    // sessionStorage.setItem("page", arg);
    //     console.log(sessionStorage.getItem("page"));
  }

  // clear all items from cart
  clearCart() {
    this.setState({ itemsArray: [] });
  }

  render() {
    return (
      <div className="body">
        <ProductProvider value={this.state}>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Navigate replace to="/all" />} />
                <Route path={`/${this.state.category}`} element={<PLP />} />
                <Route
                  path="/details/:id"
                  element={
                    <Details
                      // states
                      id={this.state.id}
                      amount={this.state.amount}
                      currency={this.state.currency}
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
      </div>
    );
  }
}

export default App;
