import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperWrapper = ({ children, ...props }) => {
  const [index, setIndex] = useState(0);

  return (
    <Swiper
      loop={false}    
      index={index}
      onIndexChanged={setIndex}
      {...props}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;