import React from "react";
import Button from "../Button";

class EventSquare extends React.Component {
  render() {
    return (
      <div className="eventSquare">
        <div>
          Date & Time
          <br />
          TITLE
          <br />
          Author
          <br />
          DescriptionText
          <br />
          DescriptionText
          <br />
          DescriptionText
          <br />
          <br />
          Number of Attendees
          <br />
          <Button />
        </div>
      </div>
    );
  }
}

export default EventSquare;
