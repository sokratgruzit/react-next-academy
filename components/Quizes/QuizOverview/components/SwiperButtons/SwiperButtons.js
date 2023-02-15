import React from "react";

import { useSwiper } from "swiper/react";
import { ArrowButton } from "@/svg";

import styles from "./SwiperButtons.module.scss";

const SwiperButtons = ({ swiperIndex }) => {
  const swiper = useSwiper();
  return (
    <div className={styles.swiperButtons}>
      <button onClick={() => swiper.slidePrev()} disabled={swiperIndex === 0}>
        <ArrowButton className={styles.swiperArrowL} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <ArrowButton className={styles.swiperArrowR} />
      </button>
    </div>
  );
};

export default SwiperButtons;
