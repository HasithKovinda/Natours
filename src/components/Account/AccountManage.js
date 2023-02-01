import React from "react";
import AccountSettings from "./AccountSettings";
import PasswordManage from "./PasswordManage";

const AccountManage = () => {
  return (
    <div>
      <article className="account-manage-section">
        <AccountSettings />
      </article>

      <PasswordManage />
    </div>
  );
};

export default AccountManage;
