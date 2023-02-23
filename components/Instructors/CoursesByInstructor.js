import styles from "../../styles/Instructors/CoursesByInstructor.module.scss";

const CoursesByInstructor = ({ data }) => {
  return (
    <div className={'container textStyles'}>
        {data && data.map((item, index) => {
            return (
                <div key={index}>hi data </div>
            )
        })}
    </div>
  );
};

export default CoursesByInstructor;
