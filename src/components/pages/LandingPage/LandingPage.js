import React from "react";
import "./LandingPage.css";
import video1 from "../../../videos/video1.mp4";
import Button from "../../Button/Button";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>

        <h1>DNA</h1>
        <p>Bring Your Idea To Life</p>
        <div className="landing-page-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            CONTACT
          </Button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default LandingPage;
