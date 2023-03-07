import { useState } from "react";

import Input from "../../components/UI/Input/Input";
import Toast from "../../components/UI/Toast/Toast";
import Button from "../../components/UI/Button/Button";

import styles from "../../styles/InstructorRegistration/InstructorRegistration.module.scss";

const FORM_DATA = [
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
  const [active, setActive] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    check: "",
  });

  const setDataUpdater = (value, field) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };

  const buttonHandler = () => {
    console.log(data);
    setActive(true);
  };

  setTimeout(() => {
    setActive(false);
  }, "1200");

  return (
    <div className={`${styles.mainBoxInstructor} `}>
      <div className={`${"contact container"} ${styles.box} ${"textStyles"}`}>
        <div className={styles.bgImg}>
          <img src="/img/InstructorsRegistration/bg.png" alt="" />
        </div>
        <div className={styles.inputBox}>
          <Input
            onChange={(e) => setDataUpdater(e.target.value, e.target.name)}
            data={FORM_DATA}
            type="input"
          />
          <div className={`${styles.testInput} textSyles`}>
            <label className={`mainBox ${styles.mainBoxLbl} `}>
              <p className={`${styles.title} `}>
                By signing up, you agree to {""}
                <span className={`${styles.borderColor} ${styles.changSpam} `}>
                  Terms of Service and Privacy Policy.
                </span>
              </p>
              <input type="checkbox" />
              <span
                onChange={(e) => setDataUpdater(e.target.value, "check")}
                className={`geekmark ${styles.geekmarkOne}`}
              ></span>
            </label>
          </div>
          <div>
            <Button
              type={"blue-btn"}
              title={"Register"}
              // onClick={clickHandler}
              customStyles={{ width: "100%" }}
            />
          </div>
          <Toast
            active={active}
            position={"top-right"}
            status={"success"}
            title={"your message has been sent"}
            icon={true}
            closeBtn={false}
            body={false}
            onClick={() => setActive(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorRegistration;
