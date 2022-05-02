import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
import GQL from "../../../services/GQL";
export default class Links extends Component {
  render() {
    return (
      <Query query={GQL.NAVBAR}>
        {({ error, loading, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
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
