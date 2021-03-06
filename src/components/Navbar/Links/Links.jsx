import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { NavLink } from "react-router-dom";

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
                console.log(categories);

                {
                  return categories.map((category) => (
                    <ul className="navbar-ul" key={category.name}>
                      <li className="navbar-li">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          id={category.name}
                          to={`/${category.name}`}
                          // to="/"
                          onClick={(e) => {
                            state.selectCategory(e.target.id);
                          }}
                        >
                          {category.name}
                        </NavLink>
                      </li>
                    </ul>
                  ));
                }
              }}
            </Query>
          );
        }}
      </ProductConsumer>
    );
  }
}
// return (
//   <ul className="navbar-ul">
//     <li className="navbar-li">
//       <NavLink
//         to={"/"}
//         className={({ isActive }) => (isActive ? "active" : "")}
//         id={categories.name}
//         onClick={(e) => {
//           state.selectCategory(e.target.id);
//         }}
//       >
//         All
//       </NavLink>
//     </li>
//     <li className="navba-li">
//       <NavLink
//         to={"/clothes"}
//         className={({ isActive }) => (isActive ? "active" : "")}
//         id={categories.name}
//         onClick={(e) => {
//           state.selectCategory(e.target.id);
//         }}
//       >
//         Clothes
//       </NavLink>
//     </li>
//   </ul>
// );
