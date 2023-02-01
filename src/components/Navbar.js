import React from "react";
import logo from "../images/logo-green-small-2x.png";
import { navLinks, socialLinks } from "../data/data";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-bar section-center">
        <img src={logo} alt="Logo" className="nav-logo" />
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
          <ul className="social-links">
            {socialLinks.map((social) => {
              return (
                <li key={social.id}>
                  <a href="#t" className="social-icon">
                    <social.value />
                  </a>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
