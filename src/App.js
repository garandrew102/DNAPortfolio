import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import Projects from "./components/pages/Projects/Projects";
import OurServices from "./components/pages/OurServices/OurServices";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/services" exact component={OurServices} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
