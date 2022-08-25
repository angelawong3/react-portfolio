import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="home-icon">
            <FontAwesomeIcon icon={faHome} color="#000" />
            &nbsp;
          </Link>
        </li>
        <li>
          <Link to="/About" className="about-icon">
            <FontAwesomeIcon icon={faUser} color="#fff" />
            &nbsp;
          </Link>
        </li>
        <li>
          <Link to="/Project" className="project-icon">
            <FontAwesomeIcon icon={faBook} color="#fff" />
            &nbsp;
          </Link>
        </li>
        <li>
          <Link to="/Resume" className="resume-icon">
            <FontAwesomeIcon icon={faNewspaper} color="#fff" />
            &nbsp;
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            &nbsp;
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
