import Button from "../UI/Button/Button";

import styles from "../../styles/Instructors/BecomeInstructorInfo.module.scss";

const BecomeInstructorInfo = () => {
  return (
    <div className={`${styles.greenBanner} textStyles`}>
      <img
        className={styles.backgroundImg}
        src='../../img/BecomeInstructor/backgroundgra.png'
      />
      <h3 className={`${styles.subTitle} ${styles.subTltLigth}`}>
        Become a Instructor
      </h3>
      <p className={styles.text}>
        Teach what you love. Corrector gives you the tools to create a course.
      </p>
      <div className={styles.orangBtn}>
        <Button size={"btn-big"} color={"orange"} title={"Start Teaching"} className={"btn"} />
      </div>
    </div>
  );
};

export default BecomeInstructorInfo;