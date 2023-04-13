import React, { useState } from "react";

import RegistrationForm from "./RegistrationForm";
import Upload from "./Upload";
import Button from "../UI/Button/Button";
import RelatedThemes from "./RelatedThemes";
import SavedChanges from "./SavedChanges";

import styles from "../../styles/Dashboard/MyProfile.module.scss";

function MyProfile({ type, title, onClick, customStyles }) {
  const [invoice, setInvoice] = useState(false);
  const DUMMY_DATA = [
    {
      invoice: "save changes",
    },
  ];

  return (
    <div>
      {invoice ? (
        <SavedChanges invoice={() => setInvoice(false)} />
      ) : (
        <div className={styles.profileContainer}>
          <RelatedThemes title="Edit your personal info" />
          <div className={`${styles.profileRegister} textStyles`}>
            <Upload />
            <div className={styles.registration}>
              <RegistrationForm />

              {DUMMY_DATA.map((item, index) => {
                return (
                  <div className={styles.purchaseContent} key={index}>
                    <button
                      style={{ width: "100%", color: "#fff" }}
                      className="blue-btn"
                      onClick={() => setInvoice(true)}
                    >
                      {item.invoice}
                    </button>
                  </div>
                );
              })}
              {/* <Button
                clasName="blue-btn"
                title={"save changes"}
                onClick={() => setInvoice(true)}
                type={"blue-btn"}
                custumLink={{ color: "#fff" }}
                // href={"/"}
              /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
