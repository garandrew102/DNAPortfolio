import React from "react";
import "./LandingPage.css";
import Future from "../../../videos/Future.mp4";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <video autoPlay loop muted>
          <source src={Future} type="video/mp4" />
        </video>

        <h1>DNA</h1>
        <p>Bringing Your Idea To Life</p>
        <div className="landing-page-btns">
          <Link to="/contact">
            <Button className="btn-style">CONTACT</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
