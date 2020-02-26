import React from "react";
import EventSquare from "./EventSquare";

class EventsList extends React.Component {
  render() {
    return (
      <div>
        <h1>EventsListComponent</h1>
        <div>
          <EventSquare />
          <EventSquare />
          <EventSquare />
        </div>
        <div>
          <EventSquare />
          <EventSquare />
          <EventSquare />
        </div>
      </div>
    );
  }
}

export default EventsList;
