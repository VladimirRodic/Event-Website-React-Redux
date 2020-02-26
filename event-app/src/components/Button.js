import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <>
        <div>
          Button {this.props.text} {this.props.color}
        </div>
      </>
    );
  }
}

export default Button;
