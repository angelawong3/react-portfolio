import React, { Component } from "react";
import cv from "../../assets/document/angela-wong-cv.pdf";

export default class Resume extends Component {
  render() {
    return (
      <section id="section">
        <div id="title">MY RESUME</div>
        <div className="resume">
          <a href={cv} className="btn btn-cv" target="_blank" rel="noreferrer">
            <span>Click to download my CV</span>
          </a>
        </div>
        <div className="skill-list">
          <h5>Proficiencies</h5>
          <ul>
            <li className="list-item">MongoDB</li>
            <li className="list-item">Express.js</li>
            <li className="list-item">React.js</li>
            <li className="list-item">Node.js</li>
            <li className="list-item">Mongoose ODM</li>
            <li className="list-item">NoSQL</li>
            <li className="list-item">Handlebars.js</li>
            <li className="list-item">Sequelize.js</li>
            <li className="list-item">Moment.js</li>
            <li className="list-item">OOP</li>
            <li className="list-item">TDD</li>
            <li className="list-item">MVC</li>
            <li className="list-item">ORM</li>
            <li className="list-item">DBeaver</li>
            <li className="list-item">MySQL</li>
            <li className="list-item">Postman API</li>
            <li className="list-item">jQuery</li>
            <li className="list-item">Bootstrap</li>
            <li className="list-item">Tailwind CSS</li>
            <li className="list-item">JavaScript</li>
            <li className="list-item">CSS</li>
            <li className="list-item">HTML</li>
          </ul>
        </div>
      </section>
    );
  }
}
