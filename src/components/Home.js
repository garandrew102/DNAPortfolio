import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./Home.css";
import video1 from "../videos/video1.mp4";

function Home() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>

      <h1>DNA</h1>
      <p>Bring Your Idea To Life</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default Home;
