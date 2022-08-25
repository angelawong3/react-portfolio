import React, { useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
// import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Angela's Portfolio";
  }, []);
  return (
    <Router>
      <Header />
      <Wrapper>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
