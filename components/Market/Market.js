import Filter from "../UI/Filter/Filter";

import styles from "../../styles/Market/Market.module.scss";
import CourseCard from "../UI/Card/CourseCard";
// import { Pagination } from "../UI/Pagination/Pagination";

let courses = [
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
  {
    img: "/img/Marketplace/product.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    price: "Free",
    level: "Pro",
    language: "ENG",
    time: "120hrs",
  },
];

function Market() {
  return (
    <div className="container">
      <div className={styles.wraper}>
        <div className={styles.font51}>
          Join the Millions for better learning
        </div>
        <img className={styles.bg} src="/img/Marketplace/background1.png" />
        <div className={styles.content}>
          {/* <Filter type={"market-filter"} /> */}
          <div className={`${"textStyles"} ${styles.gap}`}>
            {courses.map((item, index) => {
              return <CourseCard type={"column"} key={index} data={item} />;
            })}
          </div>
        </div>
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default Market;
