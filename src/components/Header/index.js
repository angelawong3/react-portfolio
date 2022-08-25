import React, { Component } from "react";
import Navigation from "../Navigation";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="name">Angela</div>
        <Navigation />
      </header>
    );
  }
}
