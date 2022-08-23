import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section id="section">
        <div id="title">MY RESUME</div>
        <div className="card-footer text-muted">
          <a
            href="./assets/document/angela-wong-cv.pdf"
            className="btn btn-cv"
            target="_blank"
          >
            <span>Click to download my CV</span>
          </a>
        </div>
      </section>
    );
  }
}
