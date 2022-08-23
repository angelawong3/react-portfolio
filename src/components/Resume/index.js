import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <h2>This is resume</h2>
        <div className="card-footer text-muted">
          <a
            href="./assets/document/angela-wong-cv.pdf"
            className="btn btn-cv"
            target="_blank"
          >
            Click to download my CV
          </a>
        </div>
      </section>
    );
  }
}
