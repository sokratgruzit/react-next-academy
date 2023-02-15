import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button.js";

import styles from "../../styles/Contact/Contact.module.scss";

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
    placeholder: "Enter your subject",
    label: "Subject",
  },
];

const FROM_TEXTAREA = {
  type: "message",
  placeholder: "type here",
  label: "message",
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <img src="img/Bg/bg_42.png" alt="bg" />
      <div className={styles.title}>
        <h1>contact us</h1>
        <h5>We’re here with you every step way!</h5>
      </div>
      <div className={`${styles.contactBox} ${'textStyles'}`}>
        <Input type="input" data={FORM_DATA} />
        <Input type="textarea" data={FROM_TEXTAREA} />
        <Button
          size={"btn-big"}
          color={"blue"}
          title="send message"
          className={""}
        />
      </div>
    </div>
  );
};

export default Contact;
