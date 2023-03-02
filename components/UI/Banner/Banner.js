import PropTypes from "prop-types";
import Button from "../Button/Button";

import styles from "../../../styles/UI/Banner/Banner.module.scss";

function Banner({ type, title, teaser, btn, dependency, placeholder, img }) {
  
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
  type === "coming-soon" &&
    (element = (
      <div className={`${styles.comingSoon} ${"textStyles"}`}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.teaser}>Coming Soon!!!</h3>
      </div>
    ));

  let wrap = (
    <div className={styles.banner}>
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
