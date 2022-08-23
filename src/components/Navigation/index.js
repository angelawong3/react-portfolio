import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faNewspaper,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => (
  <div>
    <nav className="nav-bar">
      <ul>
        <li>
          <a className="home-icon" href="/">
            <FontAwesomeIcon icon={faHome} color="#000" />
            &nbsp;
          </a>
        </li>
        <li>
          <a className="about-icon" href="/about">
            <FontAwesomeIcon icon={faUser} color="#fff" />
            &nbsp;
          </a>
        </li>
        <li>
          <a className="project-icon" href="/project">
            <FontAwesomeIcon icon={faBook} color="#fff" />
            &nbsp;
          </a>
        </li>
        <li>
          <a className="resume-icon" href="/resume">
            <FontAwesomeIcon icon={faNewspaper} color="#fff" />
            &nbsp;
          </a>
        </li>
        <li>
          <a className="contact-icon" href="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            &nbsp;
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
