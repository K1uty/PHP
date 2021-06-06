import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logo.png";
import "../assets/css/Header.css";

function Header() {
  let url = "#";
  let ig = "http://www.instagram.com"
  let login = "http://localhost:3000/login"
  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="Consultorio Dermatológico y Dermatoestético CPAR"
        />
      </div>
      <div className="menu-redes">
        <div className="menu">
          <ul>
            <li>
              <a href={url}>INICIO</a>
            </li>
            <li>
              <a href={url}>TRATAMIENTOS</a>
            </li>
            <li>
              <a href={url}>NOSOTRAS</a>
            </li>
            <li>
              <a href={url}>CONTACTO</a>
            </li>
          </ul>
        </div>
        <div className="redes">
          <ul>
            <li>
              <a href={url}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href={url}>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a href={url}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href={ig}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
