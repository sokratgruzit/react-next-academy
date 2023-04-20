import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, Navigation } from "swiper/react";
import SwiperCore, { Navigation as SwiperNavigation } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/Quizes/QuizCpmpetitionHistory.module.scss";
const USERS_ARR = [
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
  {
    img: "/img/Quiz/avatar1.png",
  },
  {
    img: "/img/Quiz/avatar2.png",
  },
];

const QuizCompetitionHistory = () => {
  const [itemsCount, setItemsCount] = useState(25);
  let swiper;

  const handlePrevButtonClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <div className="container textStyles">
      <div className={styles.quizCompoetitionHistory}>
        <p>Competition history</p>
        <div className={styles.users}>
          <Swiper
            className={styles.swiper}
            style={{ position: "inherit" }}
            spaceBetween={10}
            slidesPerView={49}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            onSwiper={(swiper) => {
              swiper = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 10,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 15,
                spaceBetween: 10,
              },
              1023: {
                slidesPerView: 30,
                spaceBetween: 10,
              },
            }}
          >
            {USERS_ARR.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    // className={`${
                    //   index > itemsCount ? styles.disabledElement : ""
                    // } ${styles.user}`}
                    // className={styles.user}
                    className={styles.userContent}
                  >
                    <img className="img-absolute" src={item.img} alt="avatar" />
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
              <div className={styles.usersNumb}>
                <h6>{USERS_ARR.length - itemsCount}</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default QuizCompetitionHistory;
