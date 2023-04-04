import { useState } from "react";
import axios from "axios";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import styles from "../../styles/Dashboard/Pasword.module.scss";

const ResetPassword = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtwo, setPasswordtwo] = useState("");
  const [passwordthree, setPasswordthree] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const hendlerSubmit = async (e) => {
    try {
      setError("");
      e.preventDefault();
      validation(value, password, passwordtwo, passwordthree);

      if (error.length === "") {
        const request = await axios.post(
          "https://accounts.tnet.ge/api/ka/user/auth",
          {
            Email: value,
            Password: password,
            Passwordtwo: password,
            Passwordthree: password,
            wtf: email,
          }
        );
      }
    } catch (e) {
      setError(e.respons);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
    setPasswordtwo(e.target.value);
    setPasswordthree(e.target.value);
  };
  const LOGIN_INFO = [
    {
      type: "text",
      placeholder: "Enter Your Address",
      label: "email",
      onChange: handleChange,
    },
    {
      type: "password",
      placeholder: "Enter ZIP Code",
      label: "existing password",
      onChange: handleChange,
    },
    {
      type: "password",
      placeholder: "Enter ZIP Code",
      label: "new password",
      onChange: handleChange,
    },
    {
      type: "password",
      placeholder: "Enter ZIP Code",
      label: "repeat password",
      onChange: handleChange,
    },
  ];
  return (
    <div
      className={styles.resetForm}
      method="Post"
      onSubmit={hendlerSubmit}
      action="/api/form"
    >
      <Input type="input" data={LOGIN_INFO} />
      <Button
        clasName="blue-btn"
        title={"save changes"}
        type={"blue-btn"}
        custumLink={{ color: "#fff" }}
        // href={"/"}
      />
    </div>
  );
};

export default ResetPassword;
