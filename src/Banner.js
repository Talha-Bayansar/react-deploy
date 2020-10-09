import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <p className="banner-text">
        This is some text above the Call To Action Button.
      </p>
      <button className="banner-ctaButton">CLICK TO SUBSCRIBE</button>
    </div>
  );
}

export default Banner;
