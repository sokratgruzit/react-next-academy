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
            className={`${styles.blueBtn} ${styles.button}`}
            onClick={onClick}
            style={customStyles}
            title={title}
          />
          {/* <button>asdwa</button> */}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
