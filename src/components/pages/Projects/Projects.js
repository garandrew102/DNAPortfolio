import React from "react";
import "./Projects.css";
import Cards from "../../Cards/Cards";
import BlueNetwork from "../../../videos/BlueNetwork.mp4";

function Projects() {
  return (
    <div className="projects">
      <video autoPlay loop muted>
        <source src={BlueNetwork} type="video/mp4" />
      </video>
      <Cards />
    </div>
  );
}

export default Projects;
