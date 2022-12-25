import React from "react";
import "./Header.css";
import logo from "../assets/movieLogo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <p>First Help Booking</p>
      </div>
      <div className="cart">
        <span className="cart-icon">
          <ShoppingCartIcon />
          <p>Cart</p>
        </span>
        <span className="badge">0</span>
      </div>
    </div>
  );
}
