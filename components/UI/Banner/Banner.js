import Button from "../Button/Button";

import styles from "../../../styles/UI/Banner/Banner.module.scss";

function Banner({
  type,
  title,
  teacher,
  teaser,
  btn,
  dependency,
  placeholder,
  img,
  profileImg,
}) {
  let element = null;

  type === "simple" &&
    (element = (
      <div className={`${"textStyles"} ${styles.body}`}>
        <h3>{title}</h3>
        {dependency === "challange" ? (
          <h5 className={styles.teaser}>{teaser}</h5>
        ) : (
          <p className={styles.teaser}>{teaser}</p>
        )}
        {dependency === "email" ? (
          <div className={styles.inputContainer}>
            <input
              className={`${styles.input} ${btn ? styles.padding : ""}`}
              type="text"
              placeholder={placeholder}
            />
            <div>
              {btn && btn}
              <Button
                customStyles={{
                  position: "absolute",
                  right: "4px",
                  top: " 3.5px",
                }}
                type={"blue-btn"}
                title={"Join now"}
              />
            </div>
          </div>
        ) : (
          <>{btn}</>
        )}
      </div>
    ));
  type === "course-banner" &&
    (element = (
      <div className={`${"textStyles"} ${styles.body}`}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.flex}>
          <img src={`/img/Marketplace/${profileImg}.png`} alt="profile image" />
          <div>{teacher}</div>
        </div>
        <div className={styles.flex}>
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4.5" r="4" fill="#0B91BB" />
          </svg>
          <div>Advance</div>
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.22 3.46C3.012 3.46 3.66 2.824 3.66 2.032C3.66 1.24 3.012 0.592 2.22 0.592C1.428 0.592 0.792 1.24 0.792 2.032C0.792 2.824 1.428 3.46 2.22 3.46Z"
              fill="#969BA6"
            />
          </svg>
          <div>ENGLISH</div>
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.22 3.46C3.012 3.46 3.66 2.824 3.66 2.032C3.66 1.24 3.012 0.592 2.22 0.592C1.428 0.592 0.792 1.24 0.792 2.032C0.792 2.824 1.428 3.46 2.22 3.46Z"
              fill="#969BA6"
            />
          </svg>
          <div>8 MIN</div>
        </div>
        <div>
          <Button
            clasName="quizBtn"
            title={"Buy course for 65$"}
            type={"orange-btn"}
          />
        </div>
      </div>
    ));
  type === "coming-soon" &&
    (element = (
      <div className={`${styles.comingSoon} ${"textStyles"}`}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.teaser}>Coming Soon!!!</h3>
      </div>
    ));

  let wrap = (
    <div className={`${styles.banner} ${styles.custom}`}>
      <div className="darkImg">
        <img
          className={`${"img-absolute"} ${styles.challengeHeight}`}
          src={`/img/Banner/${img}.png`}
          alt="bannerImage"
        />
      </div>
      <div className="lightImg">
        <img
          className={"img-absolute"}
          src={`/img/Banner/lBg1.png`}
          alt="bannerImage"
        />
      </div>
      <div className="container">{element}</div>
    </div>
  );  
  return wrap;
}

export default Banner;
