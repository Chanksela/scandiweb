import GQL from "../../../services/GQL";
import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { ProductConsumer } from "../../../services/contex";
import CircleIcon from "../../../Images/CircleIcon.png";
export default class ProductCard extends Component {
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return (
            <Query
              query={GQL.PRODUCTS}
              variables={{ input: { title: state.category } }}
            >
              {({ error, loading, data }) => {
                if (error) return `Error ${error.message}`;
                if (loading) return loading;
                const { category } = data;
                console.log(category);
                return (
                  <>
                    <h1>{state.category}</h1>
                    <div className="main-container">
                      {state.product}
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
                            {/* {console.log(info)} */}
                            {!info.inStock && (
                              <p className="out-of-stock">Out of Stock</p>
                            )}
                          </div>
                          {info.inStock && (
                            <div className={"cart-icon"}>
                              <img
                                id="cart-btn"
                                alt="cart-icon"
                                src={CircleIcon}
                                onClick={() => {
                                  state.onAdd(info);
                                }}
                              />
                            </div>
                          )}
                          <div className="product-specifics">
                            <p>{info.brand}</p>
                            <Link to={`/details/${info.id}`}>{info.name}</Link>
                            <p>
                              {state.currency}
                              {info.prices[state.amount].amount}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              }}
            </Query>
          );
        }}
      </ProductConsumer>
    );
  }
}
