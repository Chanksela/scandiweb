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
            <div className="main-container">
              <Query
                query={GQL.PRODUCTS}
                variables={{ input: { title: state.categories } }}
              >
                {({ error, loading, data }) => {
                  if (error) return `Error ${error.message}`;
                  if (loading) return loading;
                  const { category } = data;

                  return category.products.map((info) => (
                    <div key={info.id} className="items-container">
                      <Link to={`/details/${info.id}`}>
                        {" "}
                        <img
                          alt="product-img"
                          src={info.gallery[0]}
                          style={{ width: "75px", height: "75px" }}
                        />
                      </Link>
                      <p>{info.name}</p>
                      <p>
                        {state.currency}
                        {info.prices[state.amount].amount}
                      </p>
                    </div>
                  ));
                }}
              </Query>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
