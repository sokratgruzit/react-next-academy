import { useState } from "react";

import InstructorCard from "../UI/Card/InstructorCard";

import styles from "../../styles/Instructors/Instructors.module.scss";

const Instructors = () => {
  // const [sad, setSad] = useState(false);

  const DUMMY__DATA = [
    {
      id: 0,
      text: "Making sure that our products exceed customer expectations for quality and performance.",
      name: "Jack Jones",
      img: "/img/InstructorImgs/JackJones.png",
    },
    {
      id: 1,
      text: "We are here to meet your demand and tech the most beneficial way for you in Personal.",
      name: "Abdurashid Aydar",
      img: "/img/InstructorImgs/AbdurashidAydar.png",
    },
    {
      id: 2,
      text: "Making sure that our products exceed customer expectations for quality and performance, and we are here to meet your demand and tech the most beneficial way for you in Personal.",
      name: "Christian Norman",
      img: "/img/InstructorImgs/ChristianNorman.png",
    },
  ];
  const instructorData = DUMMY__DATA;

  return (
    <div className={`${styles.instructors} textStyles`}>
      <img
        className={`darkImg ${styles.background}`}
        src='/img/InstructorImgs/bgbottom.png'
      />
      <div className='container'>
        <InstructorCard data={instructorData} />
      </div>
    </div>
  );
};

export default Instructors;
