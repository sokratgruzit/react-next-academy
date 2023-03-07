import styles from "../../../styles/UI/Button/Button.module.scss";

const Button = ({ type, title, onClick, customStyles }) => {
  return (
    <>
      {type === "transparent-btn" ? (
        <div
          className={`${styles.transparentBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          {title}
        </div>
      ) : type === "blue-btn" ? (
        <div
          className={`${styles.blueBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          {title}
        </div>
      ) : type === "orange-btn" ? (
        <div
          className={`${styles.orangeBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          {title}
        </div>
      ) : type === "white-btn" ? (
        <div
          className={`${styles.whiteBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          {title}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Button;
