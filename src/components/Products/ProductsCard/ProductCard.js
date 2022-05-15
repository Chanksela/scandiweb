import GQL from "../../../services/GQL";
import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
import "./ProductCard.css";
export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = { test: [] };
  }
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  render() {
    return (
      <div className="main-container">
        <Query
          query={GQL.PRODUCTS}
          variables={{ input: { title: this.props.category } }}
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
                  {this.props.currency}
                  {info.prices[this.props.amount].amount}
                </p>
              </div>
            ));
          }}
        </Query>
      </div>
    );
  }
}
