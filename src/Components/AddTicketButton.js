import React from "react";
import Button from "@mui/material/Button";
import "./AddTicketButton.css";

function AddTicketButton(props) {
  return (
    <div className="addTicketButtonContainer">
      <div className="addTicketButtonContainer-label">{props.ticketType}</div>
      <div className="addTicketButtonContainer-label">{props.ticketCost}</div>
      <div className="addTicketButton">
        {/* <btn>Add</btn> */}
        <btn variant="outlined" size="small">
          -
        </btn>
        <div>1</div>
        <btn variant="outlined" size="small">
          +
        </btn>
      </div>
    </div>
  );
}

export default AddTicketButton;
