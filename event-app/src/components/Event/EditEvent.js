import React from "react";
import Menu from "./Menu";
import Attendees from "./Attendees";

class EditEvent extends React.Component {
  render() {
    return (
      <div>
        <h1>EditEventComponent</h1>
        <div>
          <Menu page="events" />
        </div>
        <div>
          DETAIL EVENT: #idOfTheEvent
          <a href="#">DELETE EVENT</a>
          Date
          <br />
          input field for date
          <br />
          <br />
          Time
          <br />
          input field for time
          <br />
          <br />
          Title
          <br />
          input field for title
          <br />
          <br />
          Description
          <br />
          input field for description
          <br />
          <br />
          Capacity
          <br />
          input field for capacity
          <br />
          <br />
          <Attendees />
        </div>
      </div>
    );
  }
}

export default EditEvent;
