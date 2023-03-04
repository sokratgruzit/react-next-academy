import Outer from "../../components/UI/ContentWrap/Outer";
import Instructors from "../../components/Instructors/Instructors";
import BecomeInstructorInfo from "../../components/Instructors/BecomeInstructorInfo";

const index = () => {
  return (
    <>
      <Outer
        title={"Instructors"}
        element={
          <>
            <Instructors />
            <BecomeInstructorInfo />
          </>
        }
      />
    </>
  );
};

export default index;
