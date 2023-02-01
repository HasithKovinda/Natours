import React from "react";
import { navLinks, socialLinks } from "../../data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="nav-link footer-link">
                {link.value}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-social-links">
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
      <p className="footer-text">
        Copyright © Natours Tour Company {new Date().getFullYear()}. All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
