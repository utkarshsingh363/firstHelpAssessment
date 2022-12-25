import React from "react";
import "./Checkout.css";
import CheckoutStepper from "./CheckoutStepper";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-page-container">
        <CheckoutStepper />
      </div>
    </div>
  );
}

export default Checkout;
