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
      <h3 
       className={`${styles.subTitle}
       ${styles.subTltLigth}`}
      >
        Become an I nstructor
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
