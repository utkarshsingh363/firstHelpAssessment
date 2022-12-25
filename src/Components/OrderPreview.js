import React from "react";
import OrderCard from "./OrderCard";
import "./OrderPreview.css";

function OrderPreview(props) {
  return (
    <div className="order-preview-container">
      <div className="contact-details">
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default OrderPreview;
