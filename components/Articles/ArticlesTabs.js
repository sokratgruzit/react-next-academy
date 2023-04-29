import React, { useState } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';

import styles from "../../styles/Articles/ArticlesTabs.module.scss";

function ArticlesTabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const reset = () => {
    router.push({
      query: {},
    });
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsMenu}>
        <div className={styles.filter}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V8C18.9999 8.26519 18.8946 8.51951 18.707 8.707L14 13.414V17C13.9999 17.2652 13.8945 17.5195 13.707 17.707L11.707 19.707C11.5671 19.8468 11.389 19.942 11.195 19.9806C11.0011 20.0192 10.8 19.9993 10.6173 19.9237C10.4346 19.848 10.2785 19.7199 10.1686 19.5555C10.0587 19.391 10 19.1978 10 19V13.414L5.293 8.707C5.10545 8.51951 5.00006 8.26519 5 8V5Z"
              fill="white"
            />
          </svg>
          Filter by
        </div>
        <ul className={styles.tabsNav}>
          {tabs.map((tab, index) => (
            <li
              key={uuidv4()}
              className={`${styles.tabsNavItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className={styles.reset} onClick={() => reset()}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.60083 7.16038C8.93322 6.2701 10.4997 5.79492 12.1021 5.79492C13.1158 5.79492 13.8317 5.82912 14.3354 5.88499C14.7941 5.93587 15.2052 6.01521 15.4967 6.1917C15.6547 6.28737 15.9197 6.49929 15.9881 6.88094C16.0566 7.26376 15.8785 7.54449 15.7824 7.66422C15.6818 7.78944 15.5712 7.86834 15.5159 7.90514C15.4831 7.92697 15.4539 7.94421 15.4315 7.95676C15.4201 7.96315 15.4099 7.96863 15.4012 7.97317L15.3892 7.97936L15.384 7.98198L15.3816 7.98317L15.3805 7.98374C15.3799 7.98401 15.3794 7.98428 15.0137 7.24209L15.3794 7.98429L14.6006 8.3679L14.2327 7.62108C14.2049 7.61757 14.1754 7.61406 14.1439 7.61057C13.7305 7.56471 13.0859 7.53109 12.1021 7.53109C10.8431 7.53109 9.61227 7.90445 8.56539 8.60395C7.51852 9.30345 6.70258 10.2977 6.22075 11.4609C5.73893 12.6241 5.61286 13.9041 5.85849 15.139C6.10413 16.3739 6.71042 17.5082 7.60072 18.3985C8.49101 19.2888 9.62532 19.8951 10.8602 20.1407C12.0951 20.3863 13.375 20.2602 14.5383 19.7784C15.7015 19.2966 16.6957 18.4807 17.3952 17.4338C18.0947 16.3869 18.4681 15.1561 18.4681 13.897L18.4681 13.029H20.2043L20.2043 13.897C20.2043 15.4995 19.7291 17.066 18.8388 18.3983C17.9485 19.7307 16.6832 20.7692 15.2027 21.3824C13.7222 21.9957 12.0931 22.1561 10.5215 21.8435C8.94983 21.5309 7.50616 20.7592 6.37306 19.6261C5.23996 18.493 4.46831 17.0494 4.15568 15.4777C3.84306 13.906 4.00351 12.277 4.61674 10.7965C5.22997 9.31603 6.26844 8.05065 7.60083 7.16038Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.1022 2L16.9468 6.84468L12.1022 11.6894L10.8745 10.4617L14.4915 6.84468L10.8745 3.22766L12.1022 2Z"
              fill="white"
            />
          </svg>
          Reset Filter
        </div>
      </div>
      <div className="container">
        <div className={styles.tabsContent}>{tabs[activeIndex].content}</div>
      </div>
    </div>
  );
}

export default ArticlesTabs;
