import React from "react";
import "./About.css";
import video1 from "../../../videos/video1.mp4";

function About() {
  return (
    <div className="about">
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      <di>
        <h1>About</h1>
      </di>
      <div>
        <p>In Progress.....</p>
      </div>
    </div>
  );
}

export default About;
