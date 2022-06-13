import React, { Component } from "react";

import "./Button.css";

export default class Button extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        onClick={this.props.function}
        disabled={this.props.disabled}
      >
        {this.props.content}
      </button>
    );
  }
}
