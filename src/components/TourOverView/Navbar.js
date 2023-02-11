import React, { useEffect } from "react";
import logo from "../../images/logo-green-small-2x.png";
import { navLinks, socialLinks } from "../../data/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLinks from "../Auth/AuthLinks";
import LogOutLinks from "../Auth/LogOutLinks";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);

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
        {user === null ? <AuthLinks /> : <LogOutLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
