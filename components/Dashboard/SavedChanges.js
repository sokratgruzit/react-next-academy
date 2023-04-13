import React from "react";
import styles from "../../styles/Dashboard/SavedChanges.module.scss";
import RelatedThemes from "./RelatedThemes";
import CornerDecor from "../UI/CornerDecor/CornerDecor";

function SavedChanges({ invoice }) {
  const DUMMY_DATA = [
    {
      name: "ali piriev",
      email: "Pirieva@gmail.com",
      phoneNumber: "+995785452145",
      city: "Tbilisi",
      country: "Georgia",
      zipCode: "0108",
      edit: "edit",
      delete: "delete",
      default: "set as default",
    },
  ];
  return (
    <div className={`${styles.mainWrapper} textStyles`}>
      <RelatedThemes title="Edit your personal info" />
      <div className={styles.contentWrapper}>
        <div className={styles.invoiceWrapper}>
          <CornerDecor />
          <div className={styles.wrapper}>
            {DUMMY_DATA.map((item, index) => {
              return (
                <div className={styles.content} key={index}>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                  <p>{item.phoneNumber}</p>
                  <div className={styles.place}>
                    <p>{item.city},</p>
                    <p>{item.country},</p>
                    <p>{item.zipCode}</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.edit}>
                    <p>{item.edit}</p>
                    <div className={styles.gap}></div>
                    <p>{item.delete}</p>
                    <div className={styles.gap}></div>
                    <p>{item.default}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.invoiceWrapper}>
          <CornerDecor />
          <div className={styles.wrapper} onClick={invoice}>
            <div className={styles.add}>
              <h4>Add Billing Address</h4>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.666 16.0013H21.3327M15.9993 21.3346V10.668M15.9993 29.3346C23.3327 29.3346 29.3327 23.3346 29.3327 16.0013C29.3327 8.66797 23.3327 2.66797 15.9993 2.66797C8.66602 2.66797 2.66602 8.66797 2.66602 16.0013C2.66602 23.3346 8.66602 29.3346 15.9993 29.3346Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedChanges;
