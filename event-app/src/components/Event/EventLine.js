import React from "react";
import Button from "../Button";

class EventLine extends React.Component {
  render() {
    return (
      <div class="eventsLine">
        <div>TITLE</div>
        <div> Description</div>
        <div>Author</div>
        <div>Date & Time</div>
        <div>Numer of Atendees</div>
        <Button />
      </div>
    );
  }
}

export default EventLine;
