import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">Logo</h1>
      <div className="navbar-links">
        <a href="#" className="navbar-links-link">
          Home
        </a>
        <a href="#" className="navbar-links-link">
          About
        </a>
        <a href="#" className="navbar-links-link">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
