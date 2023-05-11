import CornerDecor from "@/components/UI/CornerDecor/CornerDecor";
import styles from "../../../styles/Market/Video/Video.module.scss";

import Tabs from "@/components/UI/Tabs/Tabs";

const tabs = [
  {
    label: "Introduction",
    content: (
      <p>
        Motion design creates movement, excitement and adds life to otherwise
        static experiences. When it comes to digital environments, it not only
        creates delight but also serves strategic purposes such as brand
        expression, accessibility, information and guidance. In this course, you
        will learn how to integrate motion to your designs with purpose in mind.
        We will cover topics ranging from micro-interactions to full screen
        transitions as well as how to prepare, animate and export your
        animations in After Effects and Lottie.
      </p>
    ),
  },
  {
    label: "Welcome",
    content: (
      <p>
        Motion design creates movement, excitement and adds life to otherwise
        static experiences. When it comes to digital environments, it not only
        creates delight but also serves strategic purposes such as brand
        expression, accessibility, information and guidance. In this course, you
        will learn how to integrate motion to your designs with purpose in mind.
        We will cover topics ranging from micro-interactions to full screen
        transitions as well as how to prepare, animate and export your
        animations in After Effects and Lottie.
      </p>
    ),
  },
  {
    label: "Best Practices",
    content: (
      <p>
        Motion design creates movement, excitement and adds life to otherwise
        static experiences. When it comes to digital environments, it not only
        creates delight but also serves strategic purposes such as brand
        expression.
      </p>
    ),
  },
  {
    label: "Lottie",
    content: (
      <p>
        Motion design creates movement, excitement and adds life to otherwise
        static experiences. Motion design creates movement, excitement and adds
        life to otherwise static experiences.
      </p>
    ),
  },
  {
    label: "Conclusion",
    content: (
      <p>
        Motion design creates movement, excitement and adds life to otherwise
        static experiences. When it comes to digital environments, it not only
        creates delight but also serves strategic purposes such as brand
        expression, accessibility, information and guidance.
      </p>
    ),
  },
];

function Video({ img, type, img2 }) {
  let video = null;

  type === "video" &&
    (video = (
      <div className={`${styles.wrap} container`}>
        <img
          className={`${styles.bg} darkImg`}
          src={`/img/Marketplace/${img}.png`}
          alt="background image"
        />
        <img
          className={`${styles.bg} lightImg`}
          src={`/img/Marketplace/${img2}.png`}
          alt="background image"
        />
        <div className={styles.flex}>
          <div className={styles.contentWraper}>
            <CornerDecor />
            <div className={styles.videoContainer}>
              <img src="/img/Marketplace/video.png" alt="background image" />
              <div className={styles.playSvg}>
                <svg
                  className={styles.playBtn}
                  width="108"
                  height="108"
                  viewBox="0 0 108 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_7342_1815)">
                    <ellipse
                      cx="53.7325"
                      cy="53.7201"
                      rx="53.4962"
                      ry="53.3333"
                      fill="#FF7152"
                      fillOpacity="0.01"
                    />
                    <path
                      d="M106.729 53.7201C106.729 82.8977 83.0029 106.553 53.7325 106.553C24.4621 106.553 0.736328 82.8977 0.736328 53.7201C0.736328 24.5424 24.4621 0.886719 53.7325 0.886719C83.0029 0.886719 106.729 24.5424 106.729 53.7201Z"
                      stroke="#FF7152"
                    />
                  </g>
                  <path
                    d="M39.4707 53.722V47.3931C39.4707 39.5354 45.0521 36.3176 51.8818 40.2465L57.3919 43.4109L62.902 46.5754C69.7317 50.5043 69.7317 56.9398 62.902 60.8687L57.3919 64.0331L51.8818 67.1976C45.0521 71.1265 39.4707 67.9087 39.4707 60.0509V53.722Z"
                    stroke="#FF7152"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_b_7342_1815"
                      x="-9.76367"
                      y="-9.61328"
                      width="126.992"
                      height="126.668"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_7342_1815"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_7342_1815"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className={styles.tabs}>
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </div>
    ));
  return video;
}

export default Video;
