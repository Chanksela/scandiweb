import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";

import "./Links.css";
import GQL from "../../../services/GQL";
import { ProductConsumer } from "../../../services/contex";
export default class Links extends Component {
  render() {
    return (
      <ProductConsumer>
        {(state) => {
          return (
            <Query query={GQL.NAVBAR}>
              {({ error, loading, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                const { categories } = data;

                return categories.map((v) => (
                  <ul className="navbar-ul" key={v.name}>
                    <li className="navbar-li">
                      <Link
                        id={v.name}
                        to="/"
                        onClick={(e) => {
                          state.selectCategory(e.target.id);
                        }}
                      >
                        {v.name}
                      </Link>
                    </li>
                  </ul>
                ));
              }}
            </Query>
          );
        }}
      </ProductConsumer>
    );
  }
}
