import { useState } from "react";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Toast from "../../components/UI/Toast/Toast";

import styles from "../../styles/Contact/Contact.module.scss";

const FROM_TEXTAREA = {
  type: "message",
  placeholder: "type here",
  label: "message",
  value: "message",
};

const Contact = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({})
  const setDataUpdater = (value, field) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };
  
  const buttonHandler = () => {
    setActive(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));

    const pattern = FORM_DATA.find((item) => item.name === name).validation;
    const isValid = value === "" || pattern.test(value);
    setErrors((prev) => ({ ...prev, [name]: !isValid }));
  };

  const FORM_DATA = [
    {
      type: "text",
      placeholder: "Your name",
      label: "name",
      name: "name",
      validation: /^[a-zA-Z ]*$/, // regex for alphabetic characters and spaces only
      errorText: 'Correct the text'
    },
    {
      type: "text",
      placeholder: "Type e-mail address",
      label: "email address",
      name: "email",
      validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // regex for email address format
      errorText: 'Correct the text'

    },
    {
      type: "text",
      placeholder: "Enter your subject",
      label: "subject",
      name: "subject",
      validation: /.+/, // regex for non-empty input
      validation: /^[\p{L} ა-ჰ]+$/u,
      errorText: 'Correct the text'

    },
  ];

  setTimeout(() => {
    setActive(false);
  }, "1200");

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
              onChange={handleChange}
              type="error"
              data={FORM_DATA}
              errors={errors}
            />
            <Input
              onChange={(e) => setDataUpdater(e.target.value, "message")}
              type="textarea"
              data={FROM_TEXTAREA}
            />
            <Button
              onClick={buttonHandler}
              type={"blue-btn"}
              title={"Send Message"}
              custumLink={{ color: "#fff" }}
            />
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

export default Contact;
