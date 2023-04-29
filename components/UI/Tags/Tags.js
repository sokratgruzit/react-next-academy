import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";

import styles from "./Tags.module.scss";
  // const [selectedTag, setselectedTag] = useState('security');

const Tags = ({ data, type }) => {
  return (
    <>
      {data.map((item, index) => {
        let query = "";

        if (type === 'topics') {
          query = "tag";
        } else if (type === 'difficulty') {
          query = "level"
        } else {
          query = "category"
        }

        return (
          <Link
            className={`${
              type === "difficulty" ? styles[data[index].customStyle] : ""
            } ${styles[type]}`}
            key={uuidv4()}
            href={`articles/?${query}=${item._id}&limit=0`}
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
};

export default Tags;
