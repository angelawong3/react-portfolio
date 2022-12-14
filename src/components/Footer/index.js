import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
  render() {
    return (
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
          <li className="footer-item">
            <a
              href="http://twitter.com/aaangelaww"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                color="#f1f2f6"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
