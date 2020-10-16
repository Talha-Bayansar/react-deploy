import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">Logo</h1>
      <div className="navbar-links">
        <span className="navbar-links-link">Home</span>
        <span className="navbar-links-link">About</span>
        <span className="navbar-links-link">Contact</span>
      </div>
    </div>
  );
}

export default Navbar;
