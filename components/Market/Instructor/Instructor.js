import CornerDecor from "@/components/UI/CornerDecor/CornerDecor";
import styles from  "../../../styles/Instructors/Instructor.module.scss"



const Instructor = ({ data }) => {
  return (
    <div className={`${"textStyles"} ${"container"} `}>
      {data &&
        data?.map((item, index) => {
          return (
            <div className={styles.instructor} key={index}>
              <div className={styles.avatar}>
                <CornerDecor />
                <img className={styles.img} src={item.img} alt="Instructor" />
              </div>
              <div className={styles.text}>
                <h1>{item.name}</h1>
                <span className={styles.position}>{item.position}</span>
                <span>{item.mail}</span>
                <p>{item.text}</p>
              </div>
            </div>  
          );
        })}
    </div>
  );
};

export default Instructor;
