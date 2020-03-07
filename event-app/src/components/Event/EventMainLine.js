import React from "react";
import Menu from "./Menu";
import EventFilter from "./EventFilter";
import EventsListLine from "./EventsListLine";

class EventMainLine extends React.Component {
  render() {
    return (
      <div className="eventMain">
        <div className="header">
          <div className="logo">Logo</div>
          <Menu page="events" />
        </div>
        <div>
          <EventFilter />
        </div>
        <div>
          <EventsListLine />
        </div>
        <div className="addEvent">
          <div className="addEventButton">+</div>
        </div>
      </div>
    );
  }
}

export default EventMainLine;
