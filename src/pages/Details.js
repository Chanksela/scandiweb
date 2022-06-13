import React, { Component } from "react";
import services from "../services/services";
import GQL from "../services/GQL";
import { Query } from "@apollo/client/react/components";
import "./Details.css";

import Images from "../components/Products/ProductsCard/Details/Images";
import Info from "../components/Products/ProductsCard/Details/Info";
class Details extends Component {
  constructor() {
    super();
    this.state = { selectedImg: 0 };
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(arg) {
    this.setState({ selectedImg: arg.target.id });
  }

  render() {
    const id = this.props.params.id;

    return (
      <Query query={GQL.DETAILS} variables={{ productId: id }}>
        {({ error, loading, data }) => {
          if (error) return `Error ${error.message}`;
          if (loading) return loading;
          const { product } = data;

          const images = product.gallery.map((img) => img);
          return (
            <div className="content">
              <Images
                images={images}
                onSelect={this.onSelect}
                selectedImg={this.state.selectedImg}
              />
              <Info
                product={product}
                onAttributePick={this.props.onAttributePick}
                currency={this.props.currency}
                amount={this.props.amount}
                onAdd={this.props.onAdd}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}
export default services.withRouter(Details);
