import CourseCard from "../UI/Card/CourseCard";

import styles from "../../styles/Instructors/CoursesByInstructor.module.scss";

const CoursesByInstructor = ({ data }) => {
  return (
    <div className={"container"}>
      {data &&
        data.map((item, index) => {
          return (
            <div className={`${"textStyles"} ${styles.coursesBy}`} key={index}>
              <h3>Courses By {item.name}</h3>
              <div className={styles.coursesWrap}>
                {item.courses && (
                  item.courses.map((item, index) => {
                    return (
                      <CourseCard type={'column'} key={index} data={item} />
                    )
                  })
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CoursesByInstructor;
