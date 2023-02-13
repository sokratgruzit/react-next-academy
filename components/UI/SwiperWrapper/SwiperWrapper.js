import React from "react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "../../../styles/Articles/Articles.module.scss";

const SwiperWrapper = ({ children, ...props }) => {
    const [index, setIndex] = useState(0);

    return (
        <Swiper
            loop={false}    
            index={index}
            onIndexChanged={setIndex}
            {...props}
        >
            {children.map((child) => (
                <div className={styles.item}>
                    <SwiperSlide>{child}</SwiperSlide>
                </div>
            ))}
        </Swiper>
    );
};

export default SwiperWrapper;