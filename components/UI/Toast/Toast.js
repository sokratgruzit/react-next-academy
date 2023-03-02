import styles from "../../../styles/UI/Toast/Toast.module.scss";

const Toast = (props) => {
  let svg = (
    <div>
      {props.status === "success" ? (
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
      {props.status === "warning" ? (
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
      {props.status === "error" ? (
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
      {props.status === "info" ? (
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
    <div>
      <div
        className={`${styles.toast} ${props.active ? styles.animate : ""} ${
          !props.body ? styles.toastSml : ""
        }`}
        role={"alert"}
      >
        <div className={styles.toastHeader}>
          <div className={styles.toastTitle}>
            {svg}
            <p style={{ color: props.color }}>
              {props.body === "long" ? "Mail Verification" : props.title}
            </p>
          </div>
          <div className={styles.closeBtn} onClick={props.handleClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#6A6D76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16992 14.83L14.8299 9.17"
                stroke="#6A6D76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.8299 14.83L9.16992 9.17"
                stroke="#6A6D76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {!props.body ? "" : ""}
        {props.body === "normal" ? (
          <div className={styles.toastBody}>
            <p>
              {props.content}
              <span className={styles.toastBtn}>
                Button
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.66898 5.16898C7.44367 5.39428 7.44367 5.75957 7.66898 5.98487L11.2022 9.51807C11.3941 9.71004 11.3941 10.0275 11.2022 10.2195L7.66898 13.7527C7.44367 13.978 7.44367 14.3433 7.66898 14.5686C7.89428 14.7939 8.25957 14.7939 8.48487 14.5686L12.0181 11.0354C12.6606 10.3928 12.6606 9.34475 12.0181 8.70218L8.48487 5.16898C8.25957 4.94367 7.89428 4.94367 7.66898 5.16898Z"
                    fill="#3D5AFE"
                  />
                </svg>
              </span>
            </p>
          </div>
        ) : (
          ""
        )}
        {props.body === "long" ? (
          <div className={styles.toastBody}>
            <p>Mail verification is necessary to set up security.</p>
            <p className={styles.toastText}>
              If you did not receive the verification code in the mail
            </p>
            <span className={styles.toastBtn} onClick={props.onClick}>
              Send it Again
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.66898 5.16898C7.44367 5.39428 7.44367 5.75957 7.66898 5.98487L11.2022 9.51807C11.3941 9.71004 11.3941 10.0275 11.2022 10.2195L7.66898 13.7527C7.44367 13.978 7.44367 14.3433 7.66898 14.5686C7.89428 14.7939 8.25957 14.7939 8.48487 14.5686L12.0181 11.0354C12.6606 10.3928 12.6606 9.34475 12.0181 8.70218L8.48487 5.16898C8.25957 4.94367 7.89428 4.94367 7.66898 5.16898Z"
                  fill="#3D5AFE"
                />
              </svg>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Toast;