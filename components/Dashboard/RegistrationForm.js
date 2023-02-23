import { useState } from "react";

import Input from "../UI/Input/Input";
import SocialLinks from "./SocialLinks";
import DropDown from "../UI/DropDown/DropDown";

import styles from "../../styles/Dashboard/RegistrationForm.module.scss";

const REGITRATION_DATA = [
  {
    type: "text",
    placeholder: "Enter Your Full Name",
    label: "full name (required)",
  },
  {
    type: "text",
    placeholder: "Enter Your Professional Headline",
    label: "professional headline",
  },
  {
    type: "text",
    placeholder: "Enter Your Phone Number",
    label: "phone number",
  },
  {
    type: "text",
    placeholder: "Enter Email",
    label: "Email",
  },
];

const ADDRESS_INFO = [
  {
    type: "text",
    placeholder: "Enter Your Address",
    label: "address",
  },
  {
    type: "text",
    placeholder: "Enter ZIP Code",
    label: "zip code",
  },
];

const ABOUT_ME = {
  type: "text",
  placeholder: "text",
  label: "about me",
};

const RegistrationForm = () => {
  const [value, setValue] = useState("");

  return (
    <form className={styles.registrationForm} action="/api/form" method="post">
      <Input type="input" data={REGITRATION_DATA} />
      <label className={styles.label}>Language</label>
      <DropDown zIndex="12" type="select" />
      <div className={styles.rowDropDowns}>
        <DropDown zIndex="11" type="select" />
        <DropDown zIndex="10" type="select" />
      </div>
      <Input type="input" data={ADDRESS_INFO} />
      <Input type="textarea" data={ABOUT_ME} />
      <SocialLinks />
    </form>
  );
};

export default RegistrationForm;
