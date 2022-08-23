import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Navigation = () => (
  <div>
    <nav className="nav-bar">
      <ul>
        <li>
          <a className="home-icon" href="/">
            <FontAwesomeIcon icon={faHome} color="#000" />
          </a>
        </li>
        <li>
          <a className="about-icon" href="/about">
            <FontAwesomeIcon icon={faUser} color="#fff" />
          </a>
        </li>
        <li>
          <a className="project-icon" href="/project">
            <FontAwesomeIcon icon={faBook} color="#fff" />
          </a>
        </li>
        <li>
          <a className="contact-icon" href="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#fff" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
