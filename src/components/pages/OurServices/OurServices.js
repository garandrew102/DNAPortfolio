import React from "react";
import Future from "../../../videos/Future.mp4";
import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="our-services">
      <video autoPlay loop muted>
        <source src={Future} type="video/mp4" />
      </video>
      <div>
        <h1>Our Services</h1>
      </div>
      <div>
        <p>In Progress.....</p>
      </div>
    </div>
  );
};

export default OurServices;
