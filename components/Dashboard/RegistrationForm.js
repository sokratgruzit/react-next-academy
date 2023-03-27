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

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Russian", value: "ru" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "Chinese", value: "ch" },
  { label: "Japanese", value: "ja" },
  { label: "Hindi", value: "hi" },
  { label: "Arabic", value: "ar" },
  { label: "Bengali", value: "be" },
  { label: "Portuguese", value: "po" },
  { label: "Punjabi", value: "pu" },
];

const countryOptions = [
  { label: "Georgia", value: "ge" },
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Russia", value: "ru" },
  { label: "Other", value: "ot" },
];

const cityOptions = [
  { label: "Tbilisi", value: "tb", countryCode: "ge" },
  { label: "Batumi", value: "ba", countryCode: "ge" },
  { label: "Rustavi", value: "ru", countryCode: "ge" },
  { label: "Kutaisi", value: "ku", countryCode: "ge" },
  { label: "Zugdidi", value: "zu", countryCode: "ge" },
  { label: "Poti", value: "po", countryCode: "ge" },
  { label: "gori", value: "go", countryCode: "ge" },
  { label: "Samtredia", value: "sa", countryCode: "ge" },
  { label: "Telavi", value: "te", countryCode: "ge" },
  { label: "Ozurgeti", value: "oz", countryCode: "ge" },
  { label: "Borjomi", value: "bo", countryCode: "ge" },
  { label: "Xashuri", value: "xa", countryCode: "ge" },
  { label: "Other", value: "ot", countryCode: "ge" },

  { label: "Moscow", value: "mo", countryCode: "ru" },
  { label: "Saint Petersburg", value: "sp", countryCode: "ru" },
  { label: "Yekaterinburg", value: "ye", countryCode: "ru" },
  { label: "Novosibirsk", value: "no", countryCode: "ru" },
  { label: "Nizhny Novgorod", value: "nn", countryCode: "ru" },
  { label: "Kazan", value: "kz", countryCode: "ru" },
  { label: "Chelyabinsk", value: "ch", countryCode: "ru" },
  { label: "Omsk", value: "om", countryCode: "ru" },
  { label: "Samara", value: "sr", countryCode: "ru" },
  { label: "Rostov-on-Don", value: "rd", countryCode: "ru" },
  { label: "Other", value: "ot", countryCode: "ru" },

  { label: "New York", value: "ny", countryCode: "us" },
  { label: "Los Angeles", value: "la", countryCode: "us" },
  { label: "Chicago", value: "cg", countryCode: "us" },
  { label: "Houston", value: "ht", countryCode: "us" },
  { label: "Phoenix", value: "px", countryCode: "us" },
  { label: "Philadelphia", value: "pd", countryCode: "us" },
  { label: "San Antonio", value: "sa", countryCode: "us" },
  { label: "San Diego", value: "sd", countryCode: "us" },
  { label: "Dallas", value: "da", countryCode: "us" },
  { label: "San Jose", value: "sj", countryCode: "us" },
  { label: "Other", value: "ot", countryCode: "us" },

  { label: "Toronto", value: "tor", countryCode: "ca" },
  { label: "Vancouver", value: "van", countryCode: "ca" },
  { label: "Montreal", value: "mo", countryCode: "ca" },
  { label: "Calgary", value: "cg", countryCode: "ca" },
  { label: "Edmonton", value: "ed", countryCode: "ca" },
  { label: "Ottawa", value: "ow", countryCode: "ca" },
  { label: "Quebec City", value: "qc", countryCode: "ca" },
  { label: "Winnipeg", value: "wn", countryCode: "ca" },
  { label: "Hamilton", value: "ht", countryCode: "ca" },
  { label: "Kitchener", value: "kt", countryCode: "ca" },
  { label: "Other", value: "ot", countryCode: "ca" },

  { label: "London", value: "lon", countryCode: "uk" },
  { label: "Manchester", value: "man", countryCode: "uk" },
  { label: "Birmingham", value: "bi", countryCode: "uk" },
  { label: "Leeds", value: "le", countryCode: "uk" },
  { label: "Glasgow", value: "gl", countryCode: "uk" },
  { label: "Sheffield", value: "sf", countryCode: "uk" },
  { label: "Bradford", value: "br", countryCode: "uk" },
  { label: "Edinburgh", value: "ed", countryCode: "uk" },
  { label: "Liverpool", value: "lv", countryCode: "uk" },
  { label: "Manchester", value: "mn", countryCode: "uk" },
  { label: "Bristol", value: "bs", countryCode: "uk" },
  { label: "Other", value: "ot", countryCode: "uk" },
];

const RegistrationForm = () => {
  const [value, setValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredCityOptions = cityOptions.filter(
    (option) => option.countryCode === selectedCountry
  );

  return (
    <form className={styles.registrationForm} action="/api/form" method="post">
      <Input type="input" data={REGITRATION_DATA} />
      {/* <label className={styles.label}>Language</label>
      <DropDown zIndex="12" type="select" />
      <div className={styles.rowDropDowns}>
        <DropDown zIndex="11" type="select" />
        <DropDown zIndex="10" type="select" />
      </div> */}
      <div className={styles.labelWrapper}>
        <div className={styles.labelontainer}>
          <label className={styles.label}>
            language
            <select
              className={styles.select}
              value={selectedLanguage}
              onChange={(event) => setSelectedLanguage(event.target.value)}
              style={{ width: "100%" }}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.labelContainerTwo}>
          <label className={styles.label}>
            Country (required)
            <select
              className={styles.select}
              value={selectedCountry}
              onChange={(event) => setSelectedCountry(event.target.value)}
            >
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.label}>
            City (required)
            <select
              className={styles.select}
              value={selectedCity}
              onChange={(event) => setSelectedCity(event.target.value)}
              disabled={!selectedCountry} // Disable city select until a country is chosen
            >
              {filteredCityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <Input type="input" data={ADDRESS_INFO} />
      <Input type="textarea" data={ABOUT_ME} />
      <SocialLinks />
    </form>
  );
};

export default RegistrationForm;
