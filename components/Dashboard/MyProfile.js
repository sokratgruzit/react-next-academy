import React from "react";

import RegistrationForm from "./RegistrationForm";
import Upload from "./Upload";
import Button from "../UI/Button/Button";
import RelatedThemes from "./RelatedThemes";

import styles from "../../styles/Dashboard/MyProfile.module.scss";

function MyProfile() {
  return (
    <div className={styles.profileContainer}>
      <RelatedThemes title="Edit your personal info" />
      <div className={styles.profileRegister}>
        <Upload />
        <div className={styles.registration}>
          <RegistrationForm />
          <Button
            size={"btn-big"}
            color={"blue"}
            title="Change Password"
            className={"btn"}
          />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
