import React, { useState } from "react";

import styles from "../../../styles/UI/DropDown/DropDown.module.scss";

const DropDown = ({ zIndex, type }) => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const lengueges = [
    "georgian",
    "English",
    "Russian",
    "georgian",
    "English",
    "Russian",
  ];
  const dropDown = [
    "menu",
    "ssettings",
    "games",
    "georgian",
    "English",
    "Russian",
    "georgian",
    "English",
    "Russian",
  ];

  return (
    <>
      {type === "select" ? (
        <div className={styles.mainWrapper} onClick={() => setShow(!show)}>
          <div
            className={styles.customSelect}
            style={{ maxHeight: show ? "1000px" : "45px", zIndex: zIndex }}
          >
            {lengueges.map((item, index) => {
              return (
                <div className={styles.customOption} key={index}>
                  {item}
                </div>
              );
            })}
            <svg
              style={{ transform: show ? "rotateX(180deg)" : "" }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
            >
              <path
                d="M13 1L8.06061 5.59317C7.47727 6.13561 6.52273 6.13561 5.93939 5.59317L1 1"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : type === "dropDown" ? (
        <div
          className={styles.customDropDownWrapp}
          style={{ maxHeight: showMenu ? "1000px" : "67.6px", zIndex: zIndex }}
        >
          <div
            className={styles.menuHeader}
            onClick={() => setShowMenu(!showMenu)}
          >
            kuku
            <svg
              style={{ transform: showMenu ? "rotateX(180deg)" : "" }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
            >
              <path
                d="M13 1L8.06061 5.59317C7.47727 6.13561 6.52273 6.13561 5.93939 5.59317L1 1"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.customDropDown}>
            {dropDown.map((item, index) => {
              return (
                <div className={styles.dropDownOption} key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DropDown;
