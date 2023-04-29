import Link from "next/link";

import styles from "../../../styles/UI/Button/Button.module.scss";
import { images } from "@/next.config";
import Image from "next/image";

const Button = ({ type, title, onClick, customStyles, href, custumLink ,image}) => {
  return (
    <>
      {type === "transparent-btn" ? (
        <div
          className={`${styles.transparentBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          <Link style={custumLink} href={`${href}`}>
            {title}
          </Link>
        </div>
      ) : type === "blue-btn" ? (
        <div
          className={`${styles.blueBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          <Link style={custumLink} href={`${href}`}>
            {title}
          </Link>
        </div>
      ) : type === "orange-btn" ? (
        <div
          className={`${styles.orangeBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          <img src={image} alt="badge" className={styles.btnIcon} />
          <Link style={custumLink} href={`${href}`}>
            {title}
          </Link>

        </div>
      ) : type === "white-btn" ? (
        <div
          className={`${styles.whiteBtn} ${styles.button}`}
          onClick={onClick}
          style={customStyles}
        >
          <Link style={custumLink} href={`${href}`}>
            {title}
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Button;
