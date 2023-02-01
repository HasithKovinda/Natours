import React from "react";
import profile from "./../../images/profile.jpg";
const AccountSettings = () => {
  return (
    <section className="account-settings common">
      <h2 className="main-heading">your accounts settings</h2>
      <form className="form">
        <div className="input-group">
          <label className="label">Name</label>
          <input className="input" type="text" />
        </div>
        <div className="input-group">
          <label className="label">Email Address</label>
          <input className="input" type="email" />
        </div>
        <div className="input-group d-flex">
          <img src={profile} alt="profile" className="profile" />
          <label class="custom-file-upload">
            <input type="file" />
            Choose New Photo
          </label>
        </div>
        <div className="btn-group">
          <button type="submit" className="submit-btn">
            save setting
          </button>
        </div>
      </form>
    </section>
  );
};

export default AccountSettings;
