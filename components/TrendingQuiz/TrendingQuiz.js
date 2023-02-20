import { Swiper, SwiperSlide } from "swiper/react";

import SlideIcons from "../UI/TotalReviews/SlideIcons";

import Card from "../UI/TrendingCards/Card.js";
import { data } from "../UI/TrendingCards/data";

import "swiper/css";

import styles from "../../styles/TrendingQuiz/TrendingQuiz.module.scss";

const TrendingQuiz = (props) => {
  return (
    <div className={`textStyles ${styles.swiper} `}>
      <div>
        <Swiper
          className={styles.quizSwiper}
          style={{ position: "inherit" }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            1023: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1365: {
              slidesPerView: 1.7,
              spaceBetween: 30,
            },
            1900: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  type={"one"}
                  key={index}
                  img={item.img}
                  title={item.title}
                  subTxt={item.subTxt}
                  level={item.level}
                  category={item.category}
                  time={item.time}
                />
              </SwiperSlide>
            );
          })}
          <div className={styles.swiperBtn}>
            <SlideIcons
              customStyles={{
                height: "30px",
                width: "30px",
              }}
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default TrendingQuiz;
