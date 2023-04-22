import Button from "../UI/Button/Button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../../styles/Instructors/BecomeInstructorInfo.module.scss";
import Link from "next/link";

const BecomeInstructorInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }),
    [];

  return (
    <div className={styles.greenBanner} data-aos="fade-up">
      {/* <div className={`${styles.backgroundImg} darkImg`}>
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
              <stop stopColor="#000F2E" />
              <stop offset="1" stopColor="#00050F" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div> */}
      <h3 className={`${styles.subTitle} ${styles.subTltLigth}`}>
        Become an Instructor
      </h3>
      <p className={styles.text}>
        Teach what you love. Corrector gives you the tools to create a course.
      </p>

      <Button
        clasName="orange-btn"
        title={"Start Teaching"}
        type={"orange-btn"}
        custumLink={{ color: "#fff" }}
        href={"/become-an-instructor"}
      />
    </div>
  );
};

export default BecomeInstructorInfo;
