import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer />
      </Router>
    );
  }
}

export default App;
