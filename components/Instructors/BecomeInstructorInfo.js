import Button from "../UI/Button/Button";

import styles from "../../styles/Instructors/BecomeInstructorInfo.module.scss";

const BecomeInstructorInfo = () => {
  return (
    <div className={styles.greenBanner}>
      {/* <img
        className={styles.backgroundImg}
        src='../../img/BecomeInstructor/backgroundgra.png'
      /> */}

      <div className={`${styles.backgroundImg} darkImg`}>
        <svg
          width="1438"
          height="1438"
          viewBox="0 0 1438 1438"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1438"
            height="1438"
            fill="url(#paint0_radial_8403_1948)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_8403_1948"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(719 719) rotate(90) scale(719)"
            >
              <stop stop-color="#000F2E" />
              <stop offset="1" stop-color="#00050F" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <h3 className={`${styles.subTitle} ${styles.subTltLigth}`}>
        Become a Instructor
      </h3>
      <p className={styles.text}>
        Teach what you love. Corrector gives you the tools to create a course.
      </p>
      <div className={styles.orangBtn}>
        <Button
          size={"btn-big"}
          color={"orange"}
          title={"Start Teaching"}
          className={"btn"}
        />
      </div>
    </div>
  );
};

export default BecomeInstructorInfo;
