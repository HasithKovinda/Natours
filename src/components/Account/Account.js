import React from "react";
import AccountManage from "./AccountManage";
import Settings from "./Settings";

const Account = () => {
  return (
    <main className="main account-center">
      <Settings />
      <AccountManage />
    </main>
  );
};

export default Account;
