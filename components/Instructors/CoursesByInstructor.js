import { useState, useEffect } from "react";

import CourseCard from "../UI/Card/CourseCard";
import Pagination from "../UI/Pagination/Pagination";

import styles from "../../styles/Instructors/CoursesByInstructor.module.scss";

const CoursesByInstructor = ({ data }) => {
  const [paginationData, setPaginationData] = useState(
    data &&
      data.map((item, index) => {
        return (
          <div className={`${"textStyles"} ${styles.coursesBy}`} key={index}>
            <h3>Courses By {item.name}</h3>
            <div className={styles.coursesWrap}>
              {item.courses &&
                item.courses.map((item, index) => {
                  return <CourseCard type={"column"} key={index} data={item} />;
                })}
            </div>
          </div>
        );
      })
  );
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
  };

  return (
    <Pagination
      paginationData={paginationData}
      itemsPerPage={itemsPerPage}
      type={"default"}
    />
  );
};

export default CoursesByInstructor;
