import React, { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
export const NAVBAR = gql`
  query Query {
    categories {
      name
    }
  }
`;
export default class Links extends Component {
  render() {
    return (
      <Query query={NAVBAR}>
        {({ error, loading, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error !!!";
          const { categories } = data;
          return categories.map((v) => (
            <ul className="navbar-ul" key={v.name}>
              <li className="navbar-li">
                <Link to={`/${v.name}`}>{v.name}</Link>
              </li>
            </ul>
          ));
        }}
      </Query>
    );
  }
}
