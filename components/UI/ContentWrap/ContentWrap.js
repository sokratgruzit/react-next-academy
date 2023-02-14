import Link from "next/link";
import styles from "../../../styles/UI/ContentWrap/ContentWrap.module.scss";

const ContentWrap = ({ title, btnText, element, row, href, btn }) => {
  return (
    <div className="container">
      <div className={styles.contentWrap}>
        <div className="textStyles">
          <h3 className={styles.title}>{title}</h3>
          {btn && (
            <Link href={`${href}`}>
            <div className={styles.btn}>
              <p>{btnText}</p>
              <svg 
                className={styles.arrow}
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3057 5.5C13.3057 5.26981 13.2142 5.04905 13.0515 4.88628L8.91939 0.754214C8.58044 0.415263 8.03089 0.415263 7.69194 0.754214C7.35299 1.09316 7.35299 1.64271 7.69194 1.98166L11.2103 5.5L7.69194 9.01834C7.35299 9.35729 7.35299 9.90684 7.69194 10.2458C8.03089 10.5847 8.58044 10.5847 8.91939 10.2458L13.0515 6.11372C13.2142 5.95095 13.3057 5.73019 13.3057 5.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.1914 5.49925C13.1914 5.0199 12.8028 4.63131 12.3235 4.63131L0.867698 4.63131C0.388389 4.63131 -0.000168741 5.0199 -0.000168762 5.49925C-0.000168783 5.9786 0.388389 6.36719 0.867698 6.36719L12.3235 6.36719C12.8028 6.36719 13.1914 5.9786 13.1914 5.49925Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
          )}
        </div>
        <div style={{marginTop: !btn ? '50px' : ''}}  className={row ? styles.content : ""}>{element}</div>
      </div>
    </div>
  );
};

export default ContentWrap;
