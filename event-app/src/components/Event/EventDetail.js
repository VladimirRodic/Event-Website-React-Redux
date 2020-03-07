import React from "react";
import EventSquare from "./EventSquare";
import Attendees from "./Attendees";
import Menu from "./Menu";

class EventDetail extends React.Component {
  render() {
    return (
      <div className="eventDetail">
        <div className="header">
          <div className="logo">Logo</div>
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
