import React from "react";
import "./Projects.css";
import Cards from "../../Cards/Cards";
import Footer from "../../Footer/Footer";
import video2 from "../../../videos/video2.mp4";

function Projects() {
  return (
    <div className="projects">
      <video autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>
      <Cards />
      <Footer />
    </div>
  );
}

export default Projects;
