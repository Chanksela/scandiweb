import React, { Component } from "react";
import services from "../services/services";
class Details extends Component {
  render() {
    const id = this.props.params.id;
    return (
      <div>
        <h1>Product ID: {id}</h1>
      </div>
    );
  }
}
export default services.withRouter(Details);
