import React from "react";

import InstructorItem from "@/components/Instructors/InstructorItem";

const DUMMY_DATA = {
  id: 0,
  text: "Making sure that our products exceed customer expectations for quality and performance.",
  name: "Jack Jones",
  img: "/img/InstructorImgs/JackJones.png",
};

const Instructor = () => {
  return <InstructorItem data={DUMMY_DATA} />;
};

export default Instructor;
