import React from "react";
import { FiStar, FiBriefcase, FiCreditCard, FiSettings } from "react-icons/fi";

const UserSettings = () => {
  return (
    <ul className="settings-list">
      <li className="setting-list active">
        <a href="#settings" className="setting ">
          <FiSettings className="setting-icon" />
          <span>settings</span>
        </a>
      </li>
      <li className="setting-list">
        <a href="#settings" className="setting">
          <FiBriefcase className="setting-icon" />
          <span>My Bookings</span>
        </a>
      </li>
      <li className="setting-list">
        <a href="#settings" className="setting">
          <FiStar className="setting-icon" />
          <span>My reviews</span>
        </a>
      </li>
      <li className="setting-list">
        <a href="#settings" className="setting">
          <FiCreditCard className="setting-icon" />
          <span>Billings</span>
        </a>
      </li>
    </ul>
  );
};

export default UserSettings;
