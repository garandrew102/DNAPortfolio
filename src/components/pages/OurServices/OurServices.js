import React from "react";
import video1 from "../../../videos/video1.mp4";
import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="our-services">
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      <h1>Our Services</h1>
      <p>In Progress.....</p>
    </div>
  );
};

export default OurServices;
