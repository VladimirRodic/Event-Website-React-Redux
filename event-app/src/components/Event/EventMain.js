import React from "react";
import Menu from "./Menu";
import EventFilter from "./EventFilter";
import EventsList from "./EventsList";

class EventMain extends React.Component {
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
          <EventsList />
        </div>
        <div className="addEvent">
          <div className="addEventButton">+</div>
        </div>
      </div>
    );
  }
}

export default EventMain;
