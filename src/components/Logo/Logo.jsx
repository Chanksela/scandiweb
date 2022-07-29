import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <div className="navbar-logo">
        <img id="logo" alt="logo" src={this.props.logo} />
      </div>
    );
  }
}
