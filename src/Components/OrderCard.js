import React from "react";
import "./OrderCard.css";

function OrderCard(props) {
  return (
    <div className="order-card-container">
      <div className="order-card-container-left">
        <img
          src="https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1667403422/ingestion-images-archive-prod/archive/1667403422176_203457_cops_0.jpg"
          alt=""
        />
        <h4>Avatar: The Way of Water</h4>
        <p>Sci-fi/Action</p>
      </div>
      <div className="order-card-container-right">
        <div className="order-card-elements">
          <div>
            <h4>Adult</h4>
            <span>x{3}</span>
          </div>
          <div>
            <h4>Child</h4>
            <span>x{1}</span>
          </div>
          <div>
            <h4>Senior</h4>
            <span>x{0}</span>
          </div>
        </div>
        <div className="order-card-cost">
          <h3>$10</h3>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
