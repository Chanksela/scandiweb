import GQL from "../../../services/GQL";
import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { ProductConsumer } from "../../../services/contex";
export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = { test: [] };
  }
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
                  <>
                    <h1>{state.categories}</h1>
                    <div className="main-container">
                      {category.products.map((info) => (
                        <div key={info.id} className="items-container">
                          <img alt="product-img" src={info.gallery[0]} />
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
