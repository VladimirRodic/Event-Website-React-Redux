import React from "react";

class EventFilter extends React.Component {
  render() {
    return (
      <div className="eventFilter">
        <div className="eventsPerTime">
          <div>ALL EVENTS</div>
          <div>FUTURE EVENTS</div>
          <div>PAST EVENTS</div>
        </div>
        <div className="eventsView">
          <div className="active">Sq</div>
          <div>Li</div>
        </div>
      </div>
    );
  }
}

export default EventFilter;
