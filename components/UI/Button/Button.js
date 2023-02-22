import styles from "../../../styles/UI/Button/Button.module.scss";

const Button = ({ title, onClick, customStyles }) => {
  return (
    <div onClick={onClick} style={customStyles}>
      {title}
      {/* {svg} */}
    </div>
  );
};

export default Button;
