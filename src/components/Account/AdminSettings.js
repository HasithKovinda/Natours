import React from "react";
import { FiStar, FiBriefcase, FiMap, FiUsers } from "react-icons/fi";

export const AdminSettings = () => {
  return (
    <div className="admin-section">
      <div className="admin">
        <p className="admin-text">Admin</p>
      </div>
      <ul className="admin-settings">
        <li className="setting-list ">
          <a href="#settings" className="setting ">
            <FiMap className="setting-icon" />
            <span>Manage tours</span>
          </a>
        </li>
        <li className="setting-list">
          <a href="#settings" className="setting">
            <FiUsers className="setting-icon" />
            <span>Manage users</span>
          </a>
        </li>
        <li className="setting-list">
          <a href="#settings" className="setting">
            <FiStar className="setting-icon" />
            <span>Manage reviews</span>
          </a>
        </li>
        <li className="setting-list">
          <a href="#settings" className="setting">
            <FiBriefcase className="setting-icon" />
            <span>Manage bookings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
