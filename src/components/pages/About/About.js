import React from "react";
import "./About.css";
import video1 from "../../../videos/video1.mp4";

function About() {
  return (
    <div className="about">
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      <div>
        <h1>About</h1>
      </div>
      <div>
        <p>In Progress.....</p>
      </div>
    </div>
  );
}

export default About;
