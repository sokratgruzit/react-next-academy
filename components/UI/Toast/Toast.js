import { useState, useEffect } from "react";
import styles from "../../../styles/UI/Toast/Toast.module.scss";

const Toast = ({
  active,
  title,
  status,
  onClick,
  position,
  icon,
  closeBtn,
}) => {
  const [color, setColor] = useState(null);

  function colorPicker(key, textColor) {
    let value = status;
    if (value === key) {
      setColor(textColor);
    }
  }

  useEffect(() => {
    colorPicker("success", "#9CCC65");
    colorPicker("error", "#EF5350");
    colorPicker("warning", "#FFA726");
    colorPicker("info", "#6A6D76");
  });

  let svg = (
    <div className={styles.status}>
      {status === "success" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.15219 16.4286L10.8225 5.70912C10.9358 5.49505 11.1053 5.31591 11.3127 5.19096C11.5202 5.06602 11.7578 4.99999 12 4.99999C12.2422 4.99999 12.4798 5.06602 12.6873 5.19096C12.8947 5.31591 13.0642 5.49505 13.1775 5.70912L18.8478 16.4286C18.9542 16.6309 19.0065 16.8573 18.9994 17.0858C18.9923 17.3142 18.9261 17.537 18.8074 17.7323C18.6886 17.9276 18.5212 18.0888 18.3216 18.2002C18.122 18.3116 17.897 18.3694 17.6684 18.3679H6.32903C6.10067 18.3689 5.87593 18.3108 5.67669 18.1992C5.47744 18.0876 5.31046 17.9264 5.19199 17.7312C5.07352 17.5359 5.00759 17.3134 5.00062 17.0851C4.99364 16.8569 5.04586 16.6307 5.15219 16.4286V16.4286Z"
            stroke="#9CCC65"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9988 9.45731V13.2761"
            stroke="#9CCC65"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9987 16.4585C12.5259 16.4585 12.9534 16.0311 12.9534 15.5038C12.9534 14.9765 12.5259 14.5491 11.9987 14.5491C11.4714 14.5491 11.0439 14.9765 11.0439 15.5038C11.0439 16.0311 11.4714 16.4585 11.9987 16.4585Z"
            fill="#9CCC65"
          />
        </svg>
      ) : (
        ""
      )}
      {status === "warning" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.15219 16.4286L10.8225 5.70912C10.9358 5.49505 11.1053 5.31591 11.3127 5.19096C11.5202 5.06602 11.7578 4.99999 12 4.99999C12.2422 4.99999 12.4798 5.06602 12.6873 5.19096C12.8947 5.31591 13.0642 5.49505 13.1775 5.70912L18.8478 16.4286C18.9542 16.6309 19.0065 16.8573 18.9994 17.0858C18.9923 17.3142 18.9261 17.537 18.8074 17.7323C18.6886 17.9276 18.5212 18.0888 18.3216 18.2002C18.122 18.3116 17.897 18.3694 17.6684 18.3679H6.32903C6.10067 18.3689 5.87593 18.3108 5.67669 18.1992C5.47744 18.0876 5.31046 17.9264 5.19199 17.7312C5.07352 17.5359 5.00759 17.3134 5.00062 17.0851C4.99364 16.8569 5.04586 16.6307 5.15219 16.4286V16.4286Z"
            stroke="#FFA726"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9988 9.45731V13.2761"
            stroke="#FFA726"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9987 16.4585C12.5259 16.4585 12.9534 16.0311 12.9534 15.5038C12.9534 14.9765 12.5259 14.5491 11.9987 14.5491C11.4714 14.5491 11.0439 14.9765 11.0439 15.5038C11.0439 16.0311 11.4714 16.4585 11.9987 16.4585Z"
            fill="#FFA726"
          />
        </svg>
      ) : (
        ""
      )}
      {status === "error" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.15219 16.4286L10.8225 5.70912C10.9358 5.49505 11.1053 5.31591 11.3127 5.19096C11.5202 5.06602 11.7578 4.99999 12 4.99999C12.2422 4.99999 12.4798 5.06602 12.6873 5.19096C12.8947 5.31591 13.0642 5.49505 13.1775 5.70912L18.8478 16.4286C18.9542 16.6309 19.0065 16.8573 18.9994 17.0858C18.9923 17.3142 18.9261 17.537 18.8074 17.7323C18.6886 17.9276 18.5212 18.0888 18.3216 18.2002C18.122 18.3116 17.897 18.3694 17.6684 18.3679H6.32903C6.10067 18.3689 5.87593 18.3108 5.67669 18.1992C5.47744 18.0876 5.31046 17.9264 5.19199 17.7312C5.07352 17.5359 5.00759 17.3134 5.00062 17.0851C4.99364 16.8569 5.04586 16.6307 5.15219 16.4286V16.4286Z"
            stroke="#EF5350"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9988 9.45731V13.2761"
            stroke="#EF5350"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9987 16.4585C12.5259 16.4585 12.9534 16.0311 12.9534 15.5038C12.9534 14.9765 12.5259 14.5491 11.9987 14.5491C11.4714 14.5491 11.0439 14.9765 11.0439 15.5038C11.0439 16.0311 11.4714 16.4585 11.9987 16.4585Z"
            fill="#EF5350"
          />
        </svg>
      ) : (
        ""
      )}
      {status === "info" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.15219 16.4286L10.8225 5.70912C10.9358 5.49505 11.1053 5.31591 11.3127 5.19096C11.5202 5.06602 11.7578 4.99999 12 4.99999C12.2422 4.99999 12.4798 5.06602 12.6873 5.19096C12.8947 5.31591 13.0642 5.49505 13.1775 5.70912L18.8478 16.4286C18.9542 16.6309 19.0065 16.8573 18.9994 17.0858C18.9923 17.3142 18.9261 17.537 18.8074 17.7323C18.6886 17.9276 18.5212 18.0888 18.3216 18.2002C18.122 18.3116 17.897 18.3694 17.6684 18.3679H6.32903C6.10067 18.3689 5.87593 18.3108 5.67669 18.1992C5.47744 18.0876 5.31046 17.9264 5.19199 17.7312C5.07352 17.5359 5.00759 17.3134 5.00062 17.0851C4.99364 16.8569 5.04586 16.6307 5.15219 16.4286V16.4286Z"
            stroke="white"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9988 9.45731V13.2761"
            stroke="white"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9987 16.4585C12.5259 16.4585 12.9534 16.0311 12.9534 15.5038C12.9534 14.9765 12.5259 14.5491 11.9987 14.5491C11.4714 14.5491 11.0439 14.9765 11.0439 15.5038C11.0439 16.0311 11.4714 16.4585 11.9987 16.4585Z"
            fill="white"
          />
        </svg>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div
      className={`${styles.toast} ${active ? styles.animate : ""} ${
        position === "top-right" ? styles.topRight : ""
      }
      ${position === "top-right-head" ? styles.topRightHead : ""}
      `}
      role={"alert"}
    >
      <div className={styles.top}>
        <div>
          {icon ? <>{svg}</> : ""}
          <p style={{ color: color }}>{title}</p>
        </div>
        {closeBtn ? (
          <svg
            className={styles.close}
            onClick={onClick}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 1 11 1C5.5 1 1 5.5 1 11C1 16.5 5.5 21 11 21Z"
              stroke="#6A6D76"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.16992 13.83L13.8299 8.17"
              stroke="#6A6D76"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8299 13.83L8.16992 8.17"
              stroke="#6A6D76"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Toast;
