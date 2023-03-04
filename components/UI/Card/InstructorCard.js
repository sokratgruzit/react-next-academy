import { useRouter } from "next/router";

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "../../../styles/UI/Card/InstructorCard.module.scss";

const InstructorCard = ({ data }) => {
  const router = useRouter();

  return (
    <div className={`${styles.instructorWrap} ${"textStyles"}`}>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${styles.instructorItem} ${
              index % 2 ?? 0 ? styles.right : ""
            }`}
            onClick={() => router.push(`/instructors/${item.id}`)}
            style={{ zIndex: "150" }}
          >
            <CornerDecor />
            <div className={styles.imgWrap}>
              <img className={styles.img} src={item.img} alt='instructor img' />
            </div>
            <div className={styles.content}>
              <h3>{item.name}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InstructorCard;
