import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faHome,
  faUser,
  faBook,
  faNewspaper,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => (
  <div className="nav-bar">
    <nav>
      <ul>
        {/* <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link-active" : "home-icon"
            }
          >
            <FontAwesomeIcon icon={faHome} />
            &nbsp;
          </NavLink>
        </li> */}
        <li className="nav-list">
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "link-active" : "about-icon"
            }
          >
            <FontAwesomeIcon icon={faUser} />
            &nbsp;
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink
            to="/Project"
            className={({ isActive }) =>
              isActive ? "link-active" : "project-icon"
            }
          >
            <FontAwesomeIcon icon={faBook} />
            &nbsp;
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink
            to="/Resume"
            className={({ isActive }) =>
              isActive ? "link-active" : "resume-icon"
            }
          >
            <FontAwesomeIcon icon={faNewspaper} />
            &nbsp;
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "link-active" : "contact-icon"
            }
          >
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
