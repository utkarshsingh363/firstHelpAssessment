import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./BookingModal.css";
import AddTicketButton from "./AddTicketButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

function BookingModal(props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.openModal}
      onClose={props.closeModal}
      closeAfterTransition
    >
      <Fade in={props.openModal}>
        <Box sx={style}>
          <div className="modalContent">
            <div className="modalContentTop">
              <img src={props.details.img} alt="" />
              <h4>{props.details.title}</h4>
              <p>{props.details.description}</p>
            </div>
            <div className="modalContentBottom">
              <AddTicketButton ticketType="Adult" ticketCost="$15.95" />
              <AddTicketButton ticketType="Child" ticketCost="$14.30" />
              <AddTicketButton ticketType="Senior" ticketCost="$14.30" />
            </div>
          </div>
          <div className="modalCheckout">
            <span>
              <h4>Subtotal</h4>
              <h2>${10}</h2>
            </span>
            <Button variant="contained" color="error">
              Checkout
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default BookingModal;
