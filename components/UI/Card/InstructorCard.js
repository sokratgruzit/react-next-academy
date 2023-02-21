import { useRouter } from "next/router";

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "../../../styles/UI/Card/InstructorCard.module.scss";

const InstructorCard = ({ data }) => {
  const router = useRouter();

  return (
    <>
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            className={`${styles.instructorItem}`}
            onClick={() => router.push(`/instructors/${item.id}`)}
            style={{ zIndex: "150" }}
          >
            <CornerDecor />
            <div className={styles.imgContainer}>
              <img src={item.img} alt="instructor img" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.names}>{item.name}</h3>
              <p className={`${styles.text}`}>{item.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InstructorCard;
