import React from "react";

import RegistrationForm from "./RegistrationForm";
import Upload from "./Upload";
import Button from "../UI/Button/Button";
import RelatedThemes from "./RelatedThemes";

import styles from "../../styles/Dashboard/MyProfile.module.scss";

function MyProfile({ type, title, onClick, customStyles }) {
  return (
    <div className={styles.profileContainer}>
      <RelatedThemes title="Edit your personal info" />
      <div className={`${styles.profileRegister} textStyles`}>
        <Upload />
        <div className={styles.registration}>
          <RegistrationForm />

          <Button
            clasName="blue-btn"
            title={"save changes"}
            onClick={onClick}
            type={"blue-btn"}
            custumLink={{ color: "#fff" }}
            // href={"/"}
          />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
