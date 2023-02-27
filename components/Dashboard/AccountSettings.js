import React from "react";

import Upload from "./Upload";
import ResetPassword from "./ResetPassword";

import RelatedThemes from "./RelatedThemes";

import styles from "../../styles/Dashboard/AccountSettings.module.scss";

function AccountSettings() {
  return (
    <div className={`${styles.account} textStyles`}>
      <RelatedThemes title="Account settings" />
      <div className={styles.box}>
        <Upload />
        <ResetPassword />
      </div>
    </div>
  );
}

export default AccountSettings;
