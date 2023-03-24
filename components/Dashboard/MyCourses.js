// import { useSelector } from "react-redux";

import CourseCard from "../UI/Card/CourseCard";
import RelatedThemes from "./RelatedThemes";
import { COURSE_HELPER } from "../UI/Card/CourseHelper";

import styles from "../../styles/Dashboard/MyCourses.module.scss";

const MyCourses = () => {
  return (
    <div className={styles.courses}>
      <RelatedThemes title="Course You Might Like" />
      <div className={styles.products}>
        {COURSE_HELPER.map((item, index) => {
          return (
            <CourseCard
              type={"row"}
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              level={item.level}
              lang={item.lang}
              time={item.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyCourses;
