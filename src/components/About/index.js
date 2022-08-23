import React, { Component } from "react";
import mypic from "../../assets/img/mypic.jpg";

export default class About extends Component {
  render() {
    return (
      <section id="section">
        <div>
          <div id="title">ABOUT ME</div>
          <div className="container">
            <div className="flex-item">
              <img id="my-pic" src={mypic} alt="my profile picture" />
            </div>
            <div className="flex-item">
              <h3>Hello!</h3>
              <p>
                I am an organised, creative, and reliable full-stack web
                developer with skills in HTML, CSS, and JavaScript. I find doing
                web development challenging yet satisfying. Feel a sense of
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
          </div>
        </div>
      </section>
    );
  }
}
