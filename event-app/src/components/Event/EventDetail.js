import React from "react";
import EventSquare from "./EventSquare";
import Attendees from "./Attendees";
import Menu from "./Menu";

class EventDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>EventDetailComponent</h1>
        <div>
          <Menu page="events" />
        </div>
        <div>
          DETAIL EVENT: #idOfTheEvent
          <EventSquare />
          <Attendees />
        </div>
      </div>
    );
  }
}

export default EventDetail;
