import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div>
    <ul className="footer">
      <li className="footer-item">
        <a
          href="https://www.linkedin.com/in/angelawong3"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#f1f2f6"
            className="anchor-icon"
          />
        </a>
      </li>
      <li className="footer-item">
        <a
          href="https://github.com/angelawong3"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#f1f2f6"
            className="anchor-icon"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
