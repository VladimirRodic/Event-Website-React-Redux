import React from "react";
import Button from "../Button";

class EventLine extends React.Component {
  render() {
    return (
      <div>
        <h1>EventLineComponent</h1>
        <div>
          TITLE Description Author Date & Time Numer of Atendees
          <Button />
        </div>
      </div>
    );
  }
}

export default EventLine;
