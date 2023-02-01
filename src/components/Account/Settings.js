import React from "react";
import { AdminSettings } from "./AdminSettings";
import UserSettings from "./UserSettings";

const Settings = () => {
  return (
    <div className="settings">
      <UserSettings />
      <AdminSettings />
    </div>
  );
};

export default Settings;
