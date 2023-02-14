import styles from "../../../styles/UI/Button/Button.module.scss";

const Button = ({ title, className, size, color, svg, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.btn} ${className} ${styles[color]} ${styles[size]}`}
    >
      {svg}
      {title}
    </div>
  );
};

export default Button;
