import React from "react";
import Button from "../Button";
import Menu from "./Menu";

class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <h1>CreateEventComponent</h1>
        <div>
          <Menu page="events" />
        </div>
        <div>
          Create new event
          <br />
          Enter details below
          <br />
          input for Title
          <br />
          input for Description
          <br />
          input for Date
          <br />
          input for Time
          <br />
          input for Capacity
          <br />
          <Button />
        </div>
      </div>
    );
  }
}

export default CreateEvent;
