import React, { Component } from "react";

export default class Images extends Component {
  render() {
    return (
      <div className="images">
        <div className="img-gallery">
          <div className="img-picker">
            {this.props.images.map((img, index) => {
              return (
                <div key={index}>
                  <img
                    id={index}
                    onClick={(e) => this.props.onSelect(e)}
                    className="imgs"
                    alt="img"
                    src={img}
                  />
                </div>
              );
            })}
          </div>{" "}
          <img
            alt="main-img"
            className="img-main"
            src={this.props.images[this.props.selectedImg]}
          />
        </div>
      </div>
    );
  }
}
