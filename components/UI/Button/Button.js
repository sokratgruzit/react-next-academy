import styles from "../../../styles/UI/Button/Button.module.scss";

const Button = ({ title, svg, onClick, customStyles }) => {
  return (
    <div
      onClick={onClick}
      className={styles.className}
      style={customStyles}
    >
      {svg}
      {title}
    </div>
  );
};

export default Button;
