import React, { useState } from "react";

import styles from "../../styles/Market/ExpandMenu.module.scss";

const DATA = [
  {
    question: "Welcome",
    answer1: "Intro",
    answer2: "Focusing attention and guiding the user",
    answer3: "Creating emotion and showcasing personality and brand",
    answer4: "Informing and giving feedback to the user",
  },
  {
    question: "Best Practices",
    answer1: "Intro",
    answer2: "Focusing attention and guiding the user",
    answer3: "Creating emotion and showcasing personality and brand",
    answer4: "Informing and giving feedback to the user",
  },
  {
    question: "Lottie",
    answer1: "Intro",
    answer2: "Focusing attention and guiding the user",
    answer3: "Creating emotion and showcasing personality and brand",
    answer4: "Informing and giving feedback to the user",
  },
  {
    question: "Conclusion",
    answer1: "Intro",
    answer2: "Focusing attention and guiding the user",
    answer3: "Creating emotion and showcasing personality and brand",
    answer4: "Informing and giving feedback to the user",
  },
];

function ExpandMenu() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <div className={`textStyles ${styles.expandMenu} `}>
      <div className={styles.title}>
        <div className="darkImg">
          <img src="/img/MarketPlace/expandBg.png" alt="" />
        </div>
        <h3 className={styles.teaesr}>Frequently Asked Questions</h3>
      </div>
      <div className={styles.accordion}>
        <div className="darkImg">
          <img
            className="img-absolute"
            src="/img/MarketPlace/expandBg.png"
            alt=""
          />
        </div>
        <div className={styles.container}>
          {DATA.map((item, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => {
                    toggle(index);
                  }}
                  className={styles.wrap}
                >
                  <h4 className={styles.question}>{item.question}</h4>
                  <div
                    className={`${styles.toggle} ${
                      clicked === index ? styles.active : ""
                    }`}
                  >
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1L8.06061 5.93939C7.47727 6.52273 6.52273 6.52273 5.93939 5.93939L1 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {clicked === index ? (
                  <div className={styles.dropdown}>
                    <div className={styles.list}>
                      <div className={styles.elipse}></div>
                      <p className={styles.paragraph}>{item.answer1}</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.elipse}></div>
                      <p className={styles.paragraph}>{item.answer2}</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.elipse}></div>
                      <p className={styles.paragraph}>{item.answer3}</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.elipse}></div>
                      <p className={styles.paragraph}>{item.answer4}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExpandMenu;
