import Link from "next/link";
import { useRouter } from "next/router";

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "../../../styles/UI/Card/CourseCard.module.scss";

const CourseCard = ({ type, data, img, title, price, time, lang, level }) => {
  let element = null;
  // if (!data) {
  //   return null;
  // }

  const slug = data?.title.toLowerCase().replace(/\s+/g, "-");

  if (type === "column") {
    element = (
      <Link className={styles.outer} href={`/market/${slug}`}>
        <div className={styles.courseCard}>
          <CornerDecor />
          <div className={styles.top}>
            <img className={styles.img} src={data.img} />
          </div>
          <div className={styles.bottom}>
            <p>{data.title}</p>
            <h4>{data.price}</h4>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}>
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4.5" r="4" fill="#FF7152" />
              </svg>
              {data.level}
            </div>
            <div className={styles.rowItem}>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22 3.46C3.012 3.46 3.66 2.824 3.66 2.032C3.66 1.24 3.012 0.592 2.22 0.592C1.428 0.592 0.792 1.24 0.792 2.032C0.792 2.824 1.428 3.46 2.22 3.46Z"
                  fill="#969BA6"
                />
              </svg>
              {data.language}
            </div>
            <div className={styles.rowItem}>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22 3.46C3.012 3.46 3.66 2.824 3.66 2.032C3.66 1.24 3.012 0.592 2.22 0.592C1.428 0.592 0.792 1.24 0.792 2.032C0.792 2.824 1.428 3.46 2.22 3.46Z"
                  fill="#969BA6"
                />
              </svg>
              {data.time}
            </div>
          </div>
        </div>
      </Link>
    );
  }
  if (type === "row") {
    element = (
      <div className={styles.products}>
        <CornerDecor />
        <div className={styles.product}>
          <div className={styles.imgBox}>
            <img className={`img-absolute ${styles.img}`} src={img} />
          </div>
          <div className={styles.wrap}>
            <div className={styles.text}>
              <p>{title}</p>
              <h4>{price}</h4>
            </div>
            <div className={styles.info}>
              <div className={styles.info__item}>
                <div className={styles.div1}></div>
                <p>{level}</p>
              </div>
              <div className={styles.info__item}>
                <div className={styles.div2}></div>
                <p>{lang}</p>
              </div>
              <div className={styles.info__item}>
                <div className={styles.div2}></div>
                <p>{time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return element;
};

export default CourseCard;
