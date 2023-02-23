import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/Instructors/InstructorItem.module.scss";

const InstructorItem = ({ data }) => {
  return (
    <div className={`${"textStyles"} ${"container"} ${styles.instructorOuter}`}>
      <img
        className={`${styles.bg} ${"darkImg"}`}
        src="/img/InstructorImgs/InstructorBG.png"
        alt="background"
      />
      {data &&
        data?.map((item, index) => {
          return (
            <div className={styles.instructor} key={index}>
              <div className={styles.avatar}>
                <CornerDecor />
                <img className={styles.img} src={item.img} alt="Instructor" />
              </div>
              <div className={styles.text}>
                <h1 className={styles.name}>{item.name}</h1>
                <p className={styles.teser}>{item.text}</p>
              </div>
              <div className={styles.bottom}>
                {item.stat &&
                  item?.stat.map((item, index) => {
                    return (
                      <div key={index} className={styles.bottomItem}>
                        {item.icon}
                        <p>
                          {item.value}
                          <span>{item.name}</span>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default InstructorItem;
