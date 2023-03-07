import Banner from "../UI/Banner/Banner";
import Video from "./Video/Video";

// import styles from "../../styles/Market/Course.module.scss";

function Course() {
  return (
    <div className="container">
      <Banner
        container={"custom-wrap"}
        type={"course-banner"}
        title={"introducing to programming with python and java"}
        teacher={"davit tavadze"}
        profileImg={"teacher"}
        img={"banner1"}
      />
      <Video type={"video"} img={"courseBg"} />
    </div>
  );
}

export default Course;
