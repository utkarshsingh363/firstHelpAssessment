import React, { Fragment } from "react";
import "./MovieCard.css";
import Button from "@mui/material/Button";
import BookingModal from "./BookingModal";

function MovieCard(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <Fragment>
      <div className="movieCard">
        <div className="imageContainer">
          <img src={props.movie.img} alt="" />
        </div>
        <div className="movieCardContent">
          <div className="movieCardTitle">
            <h3>{props.movie.title}</h3>
          </div>
          <div className="movieCardBody">
            <p>{props.movie.description}</p>
          </div>
          <div className="movieCardActions">
            <Button variant="contained" color="error" onClick={handleOpen}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <BookingModal
        closeModal={handleClose}
        openModal={openModal}
        details={props.movie}
      />
    </Fragment>
  );
}

export default MovieCard;
