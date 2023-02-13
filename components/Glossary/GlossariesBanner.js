import Link from "next/link";

import GlosarryCard from "../UI/Glossary/GlosarryCard";

import styles from "../../styles/Glossary/GlossariesBanner.module.scss";
function GlossaryInner({ data }) {
  return (
    <div className={styles.glossariesBanner}>
      <img
        className={`${styles.bg} ${styles.dark}`}
        src="img/Glossaries/background1.png"
        alt="background"
      />
      <img
        className={`${styles.bg} ${styles.light}`}
        src="img/Glossaries/background1Light.png"
        alt="background"
      />
      <div className={`${styles.top} ${"textStyles"} ${"container"}`}>
        <h2 className={styles.title}>270+ Terms in our Glossary</h2>
        <Link href={`/glossary`} className={"grey-btn"} legacyBehavior>
          <a style={{ width: "fit-content" }}>
            <span>
              Go To Glossary
              <svg
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
                  d="M13.1914 5.49925C13.1914 5.0199 12.8028 4.63131 12.3235 4.63131L0.867698 4.63131C0.388389 4.63131 -0.000168569 5.0199 -0.00016859 5.49925C-0.000168611 5.9786 0.388389 6.36719 0.867698 6.36719L12.3235 6.36719C12.8028 6.36719 13.1914 5.9786 13.1914 5.49925Z"
                  fill="white"
                />
              </svg>
            </span>
          </a>
        </Link>
        <div className={styles.content}>
          <GlosarryCard data={data} />
        </div>
      </div>
    </div>
  );
}

export default GlossaryInner;
