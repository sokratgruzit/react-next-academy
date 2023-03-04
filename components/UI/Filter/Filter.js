import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import Vector from "../../../public/img/Marketplace/Vector.svg";
import StrokeSvg from "../../../public/img/Marketplace/Vector (Stroke).svg";
import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "./Filter.module.scss";

const QUIZZES_FILTER = [
  {
    title: "Level",
    items: [
      {
        title: "Begginer",
        amount: "(794)",
      },
      {
        title: "Advance",
        amount: "(203)",
      },
      {
        title: "Pro",
        amount: "(80)",
      },
    ],
  },
  {
    title: "Category",
    items: [
      {
        title: "Blockchain",
      },
      {
        title: "Security",
      },
      {
        title: "Phyton",
      },
    ],
  },
];
const MARKET_FILTER = [
  {
    title: "Level",
    items: [
      {
        title: "Begginer",
        amount: "(794)",
      },
      {
        title: "Advance",
        amount: "(203)",
      },
      {
        title: "Pro",
        amount: "(80)",
      },
    ],
  },
  {
    title: "Course Type",
    items: [
      {
        title: "Paid",
        amount: "(80)",
      },
      {
        title: "Free",
        amount: "(22)",
      },
    ],
  },
  {
    title: "Course Language",
    items: [
      {
        title: "English",
        amount: "(232)",
      },
      {
        title: "Deutsch",
        amount: "(212)",
      },
      {
        title: "Russian",
        amount: "(12)",
      },
      {
        title: "Pakistanian",
        amount: "(2)",
      },
    ],
  },
];

function calculateFilterObj(data) {
  return data.reduce((acc, { title, items }) => {
    acc[title] = items.reduce((subAcc, { title }) => {
      subAcc[title] = false;
      return subAcc;
    }, {});
    return acc;
  }, {});
}

const Filter = ({ className, type }) => {
  const filterObj = useMemo(
    () => calculateFilterObj(QUIZZES_FILTER, MARKET_FILTER),
    [QUIZZES_FILTER, MARKET_FILTER]
  );
  const [filter, setFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState(filterObj);

  const showFIlter = () => {
    setFilter(!filter);
  };
  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setFilter(false);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  let element = null;

  type === "quizzes-filter" &&
    (element = (
      <div
        className={`${
          isMobile && filter ? styles.dropdown : styles.filterMainWrapp
        } ${className}`}
      >
        <CornerDecor />
        <div className={styles.FilterButton} onClick={showFIlter}>
          <Vector />
          <p>Filter</p>
          <div
            className={styles.svgWrapp}
            style={{ transform: filter ? "rotateX(180deg)" : "rotateX(0)" }}
          >
            <StrokeSvg
              className={filter ? styles.svgRed : styles.svgLightmode2}
            />
          </div>
        </div>
        <div className={styles.filterWrapp}>
          <div className={styles.filter}>
            {QUIZZES_FILTER.map((item, index) => {
              return (
                <div key={index} className={styles.item}>
                  <h4>{item.title}</h4>
                  {item.items.map((subItem, index) => {
                    return (
                      <div key={index + "hash"} className={styles.checkBox}>
                        <button type="button">
                          <label className={styles.checkBox__inner}>
                            <p className={styles.label}>{subItem.title}</p>
                            <input
                              type="checkbox"
                              value={
                                selectedProperties?.[item?.title]?.[
                                  subItem?.title
                                ]
                              }
                              checked={
                                selectedProperties?.[item?.title]?.[
                                  subItem?.title
                                ]
                              }
                              onChange={(e) => {
                                const checked = e.currentTarget.checked;
                                setSelectedProperties((prev) => ({
                                  ...prev,
                                  [item.title]: {
                                    ...prev[item.title],
                                    [subItem.title]: checked,
                                  },
                                }));
                              }}
                            />
                            <span className={styles.mark}></span>
                          </label>
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className={styles.resetBtn}>
              <p
                className={styles.btnTxt}
                onClick={() => setSelectedProperties(filterObj)}
              >
                Reset Filter
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  type === "market-filter" &&
    (element = (
      <div
        className={`${
          isMobile && filter ? styles.dropdown : styles.filterMainWrapp
        } ${className}`}
      >
        <CornerDecor />
        <div className={styles.FilterButton} onClick={showFIlter}>
          <Vector />
          <p>Filter</p>
          <div
            className={styles.svgWrapp}
            style={{ transform: filter ? "rotateX(180deg)" : "rotateX(0)" }}
          >
            <StrokeSvg
              className={filter ? styles.svgRed : styles.svgLightmode2}
            />
          </div>
        </div>
        <div className={styles.filterWrapp}>
          <div className={styles.filter}>
            {MARKET_FILTER.map((item, index) => {
              return (
                <div key={index} className={styles.item}>
                  <h4>{item.title}</h4>
                  {item.items.map((subItem, index) => {
                    return (
                      <div key={index + "hash"} className={styles.checkBox}>
                        <button type="button">
                          <label className={styles.checkBox__inner}>
                            <p className={styles.label}>{subItem.title}</p>
                            <input
                              type="checkbox"
                              value={
                                selectedProperties?.[item?.title]?.[
                                  subItem?.title
                                ]
                              }
                              checked={
                                selectedProperties?.[item?.title]?.[
                                  subItem?.title
                                ]
                              }
                              onChange={(e) => {
                                const checked = e.currentTarget.checked;
                                setSelectedProperties((prev) => ({
                                  ...prev,
                                  [item.title]: {
                                    ...prev[item.title],
                                    [subItem.title]: checked,
                                  },
                                }));
                              }}
                            />
                            <span className={styles.mark}></span>
                          </label>
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className={styles.resetBtn}>
              <p
                className={styles.btnTxt}
                onClick={() => setSelectedProperties(filterObj)}
              >
                Reset Filter
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  return element;
};

export default Filter;
