import InstructorItem from "../../components/Instructors/InstructorItem";

const DUMMY_DATA = [{
  id: 0,
  name: "Jack Jones",
  text: "Making sure that our products exceed customer expectations for quality and performance.",
  img: "/img/InstructorImgs/JackJones.png",
  rating: '4',
  reviews: '9',
  students: '25',
  coursesSum: '4',
  courses: [
    {
      title: 'Kak Kushat Xui',
      price: 'Free',
      level: 'Legendary',
      language: 'ENG',
      time: '120hrs'
    }
  ]
}];

const Instructor = () => {
  return <InstructorItem data={DUMMY_DATA} />;
};

export default Instructor;
