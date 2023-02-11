import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/user/userSlice";

const LogOutLinks = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  return (
    <ul className="signup-links sign-out">
      <li>
        <button
          className="signup-link"
          onClick={() => dispatch(logout())}
          style={{ cursor: "pointer" }}
        >
          Sign Out
        </button>
      </li>
      <li>
        <Link to="/account" className="auth-header">
          <img src={user.photo} className="profile-img" alt="logout" />
          <p>{user.name.split(" ")[1]}</p>
        </Link>
      </li>
    </ul>
  );
};

export default LogOutLinks;
