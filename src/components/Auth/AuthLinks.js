import React from "react";
import { Link } from "react-router-dom";

const AuthLinks = () => {
  return (
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
  );
};

export default AuthLinks;
