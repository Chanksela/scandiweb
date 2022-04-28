import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  render() {
    return (
      <div>
        <Query query={this.props.category}>
          {({ error, loading, data }) => {
            if (error) return `Error ${error.message}`;
            if (loading) return loading;
            const { category } = data;
            console.log(category);
            return category.products.map((info) => (
              <div key={info.id}>
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
                  {info.prices[0].amount}
                  {info.prices[0].currency.symbol}
                </p>
              </div>
            ));
          }}
        </Query>
      </div>
    );
  }
}
