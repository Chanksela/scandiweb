import GQL from "../../../services/GQL";
import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { ProductConsumer } from "../../../services/contex";
import CartIcon from "../../../Icons/Vector.svg";
export default class ProductCard extends Component {
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return (
            <Query
              query={GQL.PRODUCTS}
              variables={{ input: { title: state.categories } }}
            >
              {({ error, loading, data }) => {
                if (error) return `Error ${error.message}`;
                if (loading) return loading;
                const { category } = data;

                return (
                  <div className="main-container">
                    {state.product} {console.log(category)}
                    <h1>{state.categories}</h1>
                    {category.products.map((info) => (
                      <div key={info.id} className="items-container">
                        <div className="img-container">
                          <img
                            id="image"
                            className={
                              !info.inStock
                                ? "out-of-stock-image"
                                : "main-image"
                            }
                            alt="product-img"
                            src={info.gallery[0]}
                          />{" "}
                          {!info.inStock && (
                            <p className="out-of-stock">Out of Stock</p>
                          )}
                        </div>
                        {info.inStock && (
                          <div className={"cart-icon"}>
                            <img
                              alt="cart-icon"
                              src={CartIcon}
                              onClick={() => {
                                state.onAdd(info.id, info);
                              }}
                            />
                          </div>
                        )}
                        <div className="product-specifics">
                          <Link to={`/details/${info.id}`}>{info.name}</Link>

                          <p>
                            {state.currency}
                            {info.prices[state.amount].amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }}
            </Query>
          );
        }}
      </ProductConsumer>
    );
  }
}
