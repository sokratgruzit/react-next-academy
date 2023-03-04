import { useState } from "react";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Toast from "../../components/UI/Toast/Toast";

import styles from "../../styles/Contact/Contact.module.scss";

const FORM_DATA = [
  {
    type: "text",
    placeholder: "Your name",
    label: "name",
    name: "name",
  },
  {
    type: "text",
    placeholder: "Type e-mail address",
    label: "email address",
    name: "email",
  },
  {
    type: "text",
    placeholder: "Enter your subject",
    label: "subject",
    name: "subject",
  },
];

const FROM_TEXTAREA = {
  type: "message",
  placeholder: "type here",
  label: "message",
  value: "message",
};

const Contact = () => {
  const [active, setActive] = useState(true);
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let closeHandler = () => {
    setActive(false);
  };

  const statusHandler = () => {
    if (data) {
      if (data.name === "") {
        console.log("required to fill name");
      }
      if (data.email === "") {
        console.log("required to fill email");
      }
      if (data.subject === "") {
        console.log("required to fill subject");
      }
      if (data.message === "") {
        console.log("requred to fill message");
      }
    } else {
      console.log("requred to fill");
    }
  };
  const messageSendHandler = () => {
    console.log(data);
    setPopup(true);
    statusHandler();
  };

  const setDataUpdater = (value, field) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
    console.log(data);
  };

  return (
    <div className={styles.contact}>
      <img className="darkImg" src="img/Bg/bg_42.png" alt="bg" />
      <img className="lightImg" src="img/Bg/bg_421.png" alt="bg" />
      <div className={`${styles.contactContent} container`}>
        <div className={styles.title}>
          <h1>contact us</h1>
          <h5>We’re here with you every step way!</h5>
        </div>
        <div className={`${styles.contactBox} ${"textStyles"}`}>
          <Input
            onChange={(e) => setDataUpdater(e.target.value, e.target.name)}
            type="input"
            data={FORM_DATA}
          />
          <Input
            onChange={(e) => setDataUpdater(e.target.value, "message")}
            type="textarea"
            data={FROM_TEXTAREA}
          />
          <Button
            // onClick={console.log(data)}
            onClick={messageSendHandler}
            type={"blue-btn"}
            title={"Send Message"}
          />
          <div>
            {/* <Popup
              title={""}
              head={false}
              teaser={"Message Sent Successfully "}
            /> */}
            <Toast
              status={"error"}
              title={"Help Text"}
              color={"#EF5350"}
              body={<div>body</div>}
              active={active}
              onClick={closeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
