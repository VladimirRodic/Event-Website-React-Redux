import React from "react";
import EventSquare from "./EventSquare";

class EventsList extends React.Component {
  render() {
    return (
      <div>
        <div className="eventsList">
          <EventSquare />
          <EventSquare />
          <EventSquare />
          <EventSquare />
          <EventSquare />
          <EventSquare />
        </div>
      </div>
    );
  }
}

export default EventsList;
