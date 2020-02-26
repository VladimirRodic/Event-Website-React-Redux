import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <>
        <div>
          Input {this.props.text} {this.props.type}
        </div>
      </>
    );
  }
}

export default Input;
