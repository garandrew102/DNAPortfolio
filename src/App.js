import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
