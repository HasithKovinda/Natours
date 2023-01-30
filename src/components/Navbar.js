import React from "react";
import logo from "../images/logo-green-small-2x.png";
import { FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-bar section-center">
        <img src={logo} alt="Logo" className="nav-logo" />
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#tours" className="nav-link">
              Tours
            </a>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a href="#t" className="social-icon">
              <FiTwitter />
            </a>
          </li>
          <li>
            <a href="#t" className="social-icon">
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a href="#t" className="social-icon">
              <FiFacebook />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
