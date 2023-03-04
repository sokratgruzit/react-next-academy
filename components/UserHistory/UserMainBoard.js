import { GitHub, Twitter } from "@/svg";

import styles from "../../styles/UserHistory/UserMainBoard.module.scss";

const UserMainBoard = () => {
  return (
    <div className={styles.outer}>
      <img
        className={`${"darkImg"} ${styles.bg}`}
        src="img/UserHistory/dark-background.png"
        alt="background"
      />
      <div className="container textStyles">
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.avatar}>
              <img
                className={styles.img}
                src="img/UserHistory/avatar.png"
                alt="img"
              />
            </div>
            <h4>0xF5 ... 301c</h4>
            <p>Student since July 22, 2022</p>
          </div>
          <div className={styles.bottom}>
            <p>About</p>
            <p className={styles.text}>
              Crag yeaned fence noontide journeys sloven noun horse wish equal
              fell, effort unworthy wires. Lowing pealed executive explore peer
              grazed.
            </p>
          </div>
          <div className={styles.ending}>
            <div className={styles.icons}>
              <a
                className={styles.socialIconLink}
                href={"Twitter.com"}
                target="_blank"
              >
                <Twitter className={styles.icon} />
              </a>
              <a
                className={styles.socialIconLink}
                href={"Github.com"}
                target="_blank"
              >
                <GitHub className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMainBoard;

{
  /* <div className={styles.heder}>
        <div className={styles.secondWrap}>
          <img
            src="img/History/205.png"
            alt="img"
            className={styles.titleIcon}
          />
        </div>
        <h3>0xF5...301c</h3>
        <span>Student since July 22, 2022</span>
      </div>
      <div className={styles.secondBox}>
        <h3>About</h3>
        <p className={styles.text}>
          Crag yeaned fence noontide journeys sloven noun horse wish equal fell,
          effort unworthy wires. Lowing pealed executive explore peer grazed.
        </p>
        <div className={styles.iconsWrapp}>
          <svg
            className={styles.img}
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4726 4.80526C18.4826 4.99026 18.4826 5.17526 18.4826 5.35026C18.4802 6.48875 18.3141 7.62099 17.9896 8.71226C17.3052 11.2275 15.8025 13.443 13.7188 15.009C11.635 16.5751 9.08892 17.4024 6.48263 17.3603C4.18869 17.3628 1.94291 16.7023 0.015625 15.4583C0.34971 15.4994 0.686021 15.5197 1.02263 15.5193C2.92108 15.521 4.76482 14.8834 6.25663 13.7093C5.37801 13.6928 4.52642 13.4026 3.82053 12.8792C3.11464 12.3558 2.58961 11.6252 2.31863 10.7893C2.58032 10.8341 2.84514 10.8582 3.11063 10.8613C3.48933 10.8627 3.86636 10.8108 4.23063 10.7073C3.32836 10.5283 2.50979 10.0582 1.90062 9.36899C1.29145 8.67979 0.925375 7.80966 0.858625 6.89226C0.841713 6.78682 0.835015 6.67999 0.838625 6.57326V6.52226C1.42452 6.8482 2.08042 7.02795 2.75062 7.04626C2.17333 6.66184 1.70016 6.14049 1.37335 5.52874C1.04653 4.91698 0.876225 4.23384 0.877625 3.54026C0.87697 2.79332 1.07212 2.05926 1.44363 1.41126C2.50268 2.71633 3.82474 3.7837 5.32372 4.54387C6.82269 5.30404 8.46498 5.73997 10.1436 5.82326C9.93186 4.91868 10.0246 3.96949 10.4074 3.123C10.7903 2.27652 11.4418 1.58006 12.2609 1.14172C13.0801 0.703379 14.021 0.547665 14.9376 0.698742C15.8543 0.849819 16.6955 1.29924 17.3306 1.97726C18.2775 1.79051 19.1853 1.44281 20.0146 0.949259C20.0502 1.66519 19.9308 2.38036 19.6645 3.04586C19.3982 3.71137 18.9913 4.31152 18.4716 4.80526H18.4726Z"
              fill="white"
            />
          </svg>
          <svg
            className={styles.img}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0002 0.246094C7.62568 0.246041 5.32858 1.09098 3.52001 2.6297C1.71145 4.16842 0.509451 6.30051 0.129123 8.64442C-0.251205 10.9883 0.214956 13.3911 1.44419 15.4227C2.67342 17.4544 4.58549 18.9823 6.83825 19.7331C7.33825 19.8211 7.52525 19.5211 7.52525 19.2581C7.52525 19.0211 7.51325 18.2331 7.51325 17.3961C5.00025 17.8581 4.35025 16.7831 4.15025 16.2211C3.92839 15.6738 3.57658 15.1889 3.12525 14.8081C2.77525 14.6211 2.27525 14.1581 3.11225 14.1461C3.43213 14.1807 3.73894 14.2919 4.00668 14.4704C4.27442 14.6488 4.49518 14.8892 4.65025 15.1711C4.78698 15.4168 4.97084 15.6331 5.19131 15.8075C5.41178 15.982 5.66451 16.1113 5.93503 16.1879C6.20554 16.2646 6.48852 16.2871 6.76775 16.2542C7.04698 16.2212 7.31697 16.1335 7.56225 15.9961C7.60556 15.4875 7.83231 15.0119 8.20024 14.6581C5.97524 14.4081 3.65025 13.5461 3.65025 9.72109C3.63608 8.72707 4.00282 7.76531 4.67525 7.03309C4.36955 6.16931 4.40533 5.22138 4.77525 4.38309C4.77525 4.38309 5.61225 4.12109 7.52525 5.40809C9.16153 4.95804 10.889 4.95804 12.5252 5.40809C14.4372 4.10809 15.2752 4.38309 15.2752 4.38309C15.6453 5.22136 15.681 6.16933 15.3752 7.03309C16.0497 7.76404 16.4168 8.72665 16.4002 9.72109C16.4002 13.5581 14.0622 14.4081 11.8372 14.6581C12.0759 14.9 12.2597 15.1904 12.3762 15.5096C12.4926 15.8288 12.5391 16.1694 12.5122 16.5081C12.5122 17.8461 12.5002 18.9211 12.5002 19.2581C12.5002 19.5211 12.6872 19.8331 13.1872 19.7331C15.4359 18.976 17.3422 17.4445 18.5661 15.4118C19.7899 13.3792 20.2516 10.9778 19.8686 8.63628C19.4857 6.29475 18.2831 4.16552 16.4755 2.62867C14.6678 1.09182 12.3729 0.247384 10.0002 0.246094Z"
              fill="white"
            />
          </svg>
        </div>
      </div> */
}
