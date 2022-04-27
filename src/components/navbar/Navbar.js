import { Component } from "react";
import { Link } from "react-router-dom";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";

import "./Navbar.css";

export const NAVBAR = gql`
  query Query {
    categories {
      name
    }
  }
`;
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-categories">
          {" "}
          <Query query={NAVBAR}>
            {({ error, loading, data }) => {
              if (loading) return "Loading...";
              if (error) return "Error !!!";
              const { categories } = data;
              return categories.map((v) => (
                <ul className="navbar-ul" key={v.name}>
                  <li className="navbar-li">
                    <Link to={v.name}>{v.name}</Link>
                  </li>
                </ul>
              ));
            }}
          </Query>
        </div>
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="navbar-cart-currency">
          <div className="navbar-currency">Currency</div>
          <div className="navbar-cart">Cart</div>
        </div>
      </div>
    );
  }
}
