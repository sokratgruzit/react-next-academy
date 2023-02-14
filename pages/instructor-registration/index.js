import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button.js";
// import BgImage from "../../components/UI/BackgroundImg/BgImage";

import styles from "../../styles/InstructorRegistration/InstructorRegistration.module.scss";

const FROM_DATA = [
  {
    type: "text",
    placeholder: "Your name",
    label: "Name",
  },
  {
    type: "text",
    placeholder: "Type e-mail address",
    label: "Email address",
  },
  {
    type: "text",
    placeholder: "Enter your phone number",
    label: "Phone number",
  },
  {
    type: "text",
    placeholder: "Enter password",
    label: "Password",
  },
  {
    type: "text",
    placeholder: "Confirm password",
    label: "Confirm password",
  },
];

const InstructorRegistration = () => {
  return (
    <div className={`${styles.mainBoxInstructor} `}>
      <div className={`${"contact container"} ${styles.box} ${"textStyles"}`}>
        {/* <div className={styles.bgImg}>
          <BgImage id={10} />
        </div> */}
        <div className={styles.inputBox}>
          <Input data={FROM_DATA} type="input" />
          <div className={`${styles.testInput} textSyles`}>
            <label className={`mainBox ${styles.mainBoxLbl} `}>
              <p className={`${styles.title} `}>
                By signing up, you agree to{""}
                <span className={styles.borderColor}>
                  Terms of Service and Privacy Policy.
                </span>
              </p>
              <input type='checkbox' />
              <span className={`geekmark ${styles.geekmarkOne}`}></span>
            </label>
          </div>
          <div>
            <Button size={"btn-big"} color={"blue"} title="send message" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default InstructorRegistration;

