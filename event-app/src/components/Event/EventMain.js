import React from "react";
import Menu from "./Menu";
import EventFilter from "./EventFilter";
import EventsList from "./EventsList";

class EventMain extends React.Component {
  render() {
    return (
      <div>
        <h1>EventMainComponent</h1>
        <div>
          <Menu page="events" />
        </div>
        <div>
          <EventFilter />
        </div>
        <div>
          <EventsList />
        </div>
      </div>
    );
  }
}

export default EventMain;
