import { useState } from "react";

import Input from "../../components/UI/Input/Input";
import Toast from "../../components/UI/Toast/Toast";
import Button from "../../components/UI/Button/Button";

import styles from "../../styles/InstructorRegistration/InstructorRegistration.module.scss";

// const FORM_DATA = [
//   {
//     type: "text",
//     placeholder: "Your name",
//     label: "Name",
//   },
//   {
//     type: "email",
//     placeholder: "Type e-mail address",
//     label: "Email address",
//   },
//   {
//     type: "tel",
//     placeholder: "Enter your phone number",
//     label: "Phone number",
//   },
//   {
//     type: "password",
//     placeholder: "Enter password",
//     label: "Password",
//   },
//   {
//     type: "password",
//     placeholder: "Confirm password",
//     label: "Confirm password",
//   },
// ];

const InstructorRegistration = () => {
  // const [active, setActive] = useState(false);
  // const [check, setCheck] = useState(false);
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   password: "",
  //   confirmPassword: "",
  //   check: false,
  // });

  // const setDataUpdater = (value, field) => {
  //   setData((prevState) => ({ ...prevState, [field]: value }));
  // };

  // const buttonHandler = () => {
  //   setActive(true);
  // };

  const checkHandler = () => {
    setCheck(!check);
  };

  setTimeout(() => {
    setActive(false);
  }, "1200");

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
      name:'name',
      type: "text",
      placeholder: "Your name",
      label: "Name",
      validation: /^[a-zA-Z ]*$/, // regex for alphabetic characters and spaces only
      errorText: 'Correct the text'
    },
    { 
      name:'email',
      type: "email",
      placeholder: "Type e-mail address",
      label: "Email address",
      validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      errorText: 'Correct the text'
    },
    {
      name:'Phone number',
      type: "tel",
      placeholder: "Enter your phone number",
      label: "Phone number",
      validation: /^\d{10,12}$/, 
      errorText: 'Correct the text'
    },
    {
      name:"password",
      type: "password",
      placeholder: "Enter password",
      label: "Password",
      validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
      errorText: 'Correct the text'
    },
    {
      name:"password",
      type: "password",
      placeholder: "Confirm password",
      label: "Confirm password",
      validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
      errorText: 'Correct the text'
    },
  ];

  return (
    <div className={`${styles.mainBoxInstructor} `}>
      <div className={`${"contact container"} ${styles.box} ${"textStyles"}`}>
        <div className={styles.bgImg}>
          <img src="/img/InstructorsRegistration/bg.png" alt="" />
        </div>
        <div className={styles.inputBox}>
          <Input
            onChange={handleChange}
            type="error"
            data={FORM_DATA}
            errors={errors} 
          />
          <div className={`${styles.testInput} textSyles`}>
            <label className={`mainBox ${styles.mainBoxLbl} `}>
              <p className={`${styles.title} `}>
                By signing up, you agree to {""}
                <span className={`${styles.borderColor} ${styles.changSpam}`}>
                  Terms of Service and Privacy Policy.
                </span>
              </p>
              <input
                onClick={checkHandler}
                onChange={(e) => setDataUpdater(e.target.value, "check")}
                type="checkbox"
              />
              <span className={`geekmark ${styles.geekmarkOne}`}></span>
            </label>
          </div>
          <div>
            <Button
              type={"blue-btn"}
              title={"Register"}
              onClick={buttonHandler}
              customStyles={{ width: "100%" }}
              custumLink={{ color: "#fff" }}
            />
          </div>
          <Toast
            active={active}
            position={"top-right-head"}
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