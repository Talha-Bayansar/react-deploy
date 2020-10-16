import React, { useState } from "react";
import "./Banner.css";

function Banner() {
  const [message, setMessage] = useState(process.env.REACT_APP_MESSAGE);
  return (
    <div className="banner">
      <p className="banner-text">
        This is some text above the Call To Action Button.
      </p>
      <button className="banner-ctaButton">CLICK TO SUBSCRIBE</button>
      <h1>{message}</h1>
    </div>
  );
}

export default Banner;
