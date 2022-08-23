import React, { Component } from "react";
import mypic from "../../assets/img/mypic.jpg";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div>
          <div>
            <div id="about-me">ABOUT ME</div>
            <div>
              <h2 className="card-title">Hello! I am Angela.</h2>
              <img id="my-pic" src={mypic} alt="my profile picture" />
              <p>
                An organised, creative, and reliable full-stack web developer
                with skills in HTML, CSS, and JavaScript. Find doing web
                development challenging yet satisfying. Feel a sense of
                accomplishment while doing so.
              </p>
              <p>
                Fluent in English, Cantonese, and Mandarin. Experience in
                administrative and customer service with achieving zero customer
                complaints and satisfied an average of over 50 citizens a day.
                Ability to brainstorm, cultivate and share ideas. Delivering at
                pace without compromising quality. Strive to work well under
                pressure. Happy to work as a team as combined skills make one
                awesome whole.
              </p>
            </div>
            <div className="card-footer text-muted">
              <a
                href="./assets/document/angela-wong-cv.pdf"
                className="btn btn-cv"
                target="_blank"
              >
                Click to download my CV
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
