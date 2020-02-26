import React, { Component } from "react";

class InfoErrorMessage extends Component {
  render() {
    return (
      <div>
        <span>Info: {this.props.infoMessage}</span>
        <span>Error: {this.props.errorMessage}</span>
      </div>
    );
  }
}

export default InfoErrorMessage;
