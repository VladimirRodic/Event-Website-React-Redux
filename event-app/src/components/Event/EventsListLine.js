import React from "react";
import EventLine from "./EventLine";

class EventsListLine extends React.Component {
  render() {
    return (
      <div>
        <div className="eventsListLine">
          <EventLine />
          <EventLine />
          <EventLine />
          <EventLine />
          <EventLine />
          <EventLine />
        </div>
      </div>
    );
  }
}

export default EventsListLine;
