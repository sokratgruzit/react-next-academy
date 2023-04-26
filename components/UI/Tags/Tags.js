import {useState} from "react"

import styles from "./Tags.module.scss";
  // const [selectedTag, setselectedTag] = useState('security');

const Tags = ({ data, type }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className={`${
              type === "dificulity" ? styles[data[index].customStyle] : ""
            } ${styles[type]}`}
            key={item._id}
          >
            {item.name}
          </div>
        );
      })}
    </>
  );
};

export default Tags;
