import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./Home.css";
import video2 from "../videos/video2.mp4";

function Home() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Home;
