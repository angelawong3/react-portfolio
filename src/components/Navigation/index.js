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
          <a href="/">
            <FontAwesomeIcon
              icon={faHome}
              color="#000"
              className="hover-icon"
            />
            &nbsp; Home
          </a>
        </li>
        <li>
          <a href="/about">
            <FontAwesomeIcon
              icon={faUser}
              color="#fff"
              className="hover-icon"
            />
            &nbsp; About
          </a>
        </li>
        <li>
          <a href="/project">
            <FontAwesomeIcon
              icon={faBook}
              color="#fff"
              className="hover-icon"
            />
            &nbsp; Project
          </a>
        </li>
        <li>
          <a href="/contact">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#fff"
              className="hover-icon"
            />
            &nbsp; Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
