import React from "react";

const PasswordManage = () => {
  return (
    <section className="account-settings common">
      <h2 className="main-heading">change password</h2>
      <form className="form">
        <div className="input-group">
          <label className="label">current password</label>
          <input className="input" type="password" />
        </div>
        <div className="input-group">
          <label className="label">new password</label>
          <input className="input" type="password" />
        </div>
        <div className="input-group">
          <label className="label">confirm password</label>
          <input className="input" type="password" />
        </div>
        <div className="btn-group">
          <button type="submit" className="submit-btn">
            save password
          </button>
        </div>
      </form>
    </section>
  );
};

export default PasswordManage;
