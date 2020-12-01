import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Projects from "./components/pages/Projects";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/contact-us" exact component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
