import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import styles from "../../styles/Profile/AccountSettings.module.scss";

const FORM_DATA = [
  {
    type: "text",
    placeholder: "piriev.ali777@gmail.com",
    label: "e-mail",
  },
  {
    type: "text",
    placeholder: "Enter",
    label: "Existing password",
  },
  {
    type: "text",
    placeholder: "Enter",
    label: "Phone number",
  },
  {
    type: "text",
    placeholder: "Enter",
    label: "Re-type new password",
  },
];
/// aaaaa
function Settings() {
  return (
    <div className="container textStyles">
      <div className={styles.box}>
        <div className={styles.textContainer}>
          <div>
            <h1 className={styles.settingsTitle}>Account Settings</h1>
            <p className={styles.paragraph}>
              Edit your account settings and password.
            </p>
          </div>
        </div>
        <div className={styles.acountContact}>
          <img
            className={styles.profileImg}
            src="../img/Profile/ImgProfile.png"
          />
          <h4 className={styles.name}>Ali Piriev</h4>
          <div className={styles.conteiner}>
            <Input data={FORM_DATA} type="input" />
          </div>
          <div className={styles.buttonbox}>
            <Button
              title={'Register'}
              type={'blue-btn'}
            />
            {/* BUTTON ALERT !!! */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
