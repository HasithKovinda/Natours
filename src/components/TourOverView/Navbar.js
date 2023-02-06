import React from "react";
import logo from "../../images/logo-green-small-2x.png";
import { navLinks, socialLinks } from "../../data/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-bar nav-center">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.value}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-links">
          {socialLinks.map((social) => {
            return (
              <li key={social.id}>
                <a href="#t" className="social-link">
                  <social.value />
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="signup-links">
          <li>
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="signup-link">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
