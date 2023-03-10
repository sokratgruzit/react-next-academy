import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import Vector from "../../../public/img/Marketplace/Vector.svg";
import StrokeSvg from "../../../public/img/Marketplace/Vector (Stroke).svg";
import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "./Filter.module.scss";

const DUMMY_FILTER = [
  {
    id: 0,
    title: "Level",
    items: [
      {
        id: 10,
        title: "Begginer",
        amount: "(794)",
      },
      {
        id: 11,
        title: "Advance",
        amount: "(203)",
      },
      {
        id: 12,
        title: "Pro",
        amount: "(80)",
      },
    ],
  },
  {
    id: 2,
    title: "Category",
    items: [
      {
        id: 13,
        title: "Blockchain",
      },
      {
        id: 14,
        title: "Security",
      },
      {
        id: 133334,
        title: "Phyton",
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

const Filter = ({ className }) => {
  const filterObj = useMemo(() => calculateFilterObj(DUMMY_FILTER), [DUMMY_FILTER]);
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

  return (
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
          <StrokeSvg className={filter ? styles.svgRed : styles.svgLightmode2} />
        </div>
      </div>
      <div className={styles.filterWrapp}>
        <div className={styles.filter}>
          {DUMMY_FILTER.map((item, index) => {
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
                            value={selectedProperties?.[item?.title]?.[subItem?.title]}
                            checked={selectedProperties?.[item?.title]?.[subItem?.title]}
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
            <p className={styles.btnTxt} onClick={() => setSelectedProperties(filterObj)}>
              Reset Filter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
