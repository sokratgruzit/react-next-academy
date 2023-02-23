import styles from "../../styles/Dashboard/RelatedThemes.module.scss";

const RelatedThemes = ({ title }) => {
  return (
    <div className={styles.relatedQuizes}>
      <h4 className={styles.quizes}>{title}</h4>
      <div className={styles.line}></div>
    </div>
  );
};

export default RelatedThemes;
