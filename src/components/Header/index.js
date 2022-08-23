import React, { Component } from "react";
import "./index.css";
import Navigation from "../Navigation";

export default class Header extends Component {
  render() {
    return (
      <header className="App">
        <Navigation />
      </header>
    );
  }
}
