import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <section id="home-page">
        <div>
          <span className="tag">&lt;body&gt;</span>
          <br />
        </div>
        <div className="title-word">
          <h1 className="title-word title-word-1">HELLO, </h1>
          <h1 className="title-word title-word-2">I am Angela.</h1>
          <br />
          <h2 className="title-word title-word-3">
            A full stack web developer.
          </h2>
        </div>

        <div>
          <span className="tag">&lt;/body&gt;</span>
        </div>
      </section>
    );
  }
}
