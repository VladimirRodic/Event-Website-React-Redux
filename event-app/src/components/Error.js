import React, { Component } from "react";
import Button from "./Button";

class Error extends Component {
  render() {
    return (
      <>
        <div>
          ErrorComponent
          <br />
          <b>Something went wrong.</b>
          <br />
          Seems like Darth Vader...
          <Button text="REFRESH" color="black" />
        </div>
      </>
    );
  }
}

export default Error;
