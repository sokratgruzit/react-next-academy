import PropTypes from "prop-types";

import styles from "../../../styles/UI/Banner/Banner.module.scss";

function Banner({
  type,
  title,
  teaser,
  btn,
  dependency,
  img,
  btnTxt,
  button,
  name,
  nameTwo,
  picture,
  level,
  category,
  time,
  subTitle,
  buttonTwo,
  titleTwo,
  subTitleTwo,
  buttonThree,
  titleThree,
  nameThree,
  placeholder,
}) {
  let element = null;
  {
    // if (type === "one") {
    //   return (element = (
    //     <div className={`${styles.banner} textStyles`}>
    //       <div className="darkImg">
    //         <img
    //           className={`${styles.bannerImg} img-absolute`}
    //           src={`/img/Banner/banner${name}.png`}
    //           alt="bannerImage"
    //         />
    //       </div>
    //       <div className="lightImg">
    //         <img
    //           className={`${styles.bannerImg} img-absolute`}
    //           src={`/img/Banner/bannerL${name}.png`}
    //           alt="bannerImage"
    //         />
    //       </div>
    //       <div className={`${styles.bannerBody} container`}>
    //         <h1 className={styles.title}>{title}</h1>
    //         <div className={styles.porfileInfo}>
    //           <img
    //             className={styles.profileImg}
    //             src={`/img/Banner/BannerPics/pic${picture}.png`}
    //             alt=""
    //           />
    //           <h5 className={styles.name}>David Tavadze</h5>
    //         </div>
    //         <div className={styles.bottom}>
    //           <div className={styles.dot}></div>
    //           <div className={`${styles.itemDot} ${styles.level}`}>{level}</div>
    //           <div className={styles.itemDot}>{category}</div>
    //           <div className={styles.itemDot}>{time}</div>
    //         </div>
    //         <button className={styles.btn}>{button}</button>
    //       </div>
    //     </div>
    //   ));
    // }
    // if (type === "two") {
    //   return (element = (
    //     <div className={`${styles.banner} textStyles`}>
    //       <div className="darkImg">
    //         <img
    //           className={`${styles.bannerImg} img-absolute`}
    //           src={`/img/Banner/banner${nameTwo}.png`}
    //           alt="bannerImage"
    //         />
    //       </div>
    //       <div className="lightImg">
    //         <img
    //           className={`${styles.bannerImg} img-absolute`}
    //           src={`/img/Banner/bannerL${nameTwo}.png`}
    //           alt="bannerImage"
    //         />
    //       </div>
    //       <div className={styles.bannerBody}>
    //         <h1 className={styles.titleTwo}>{titleTwo}</h1>
    //         <p className={styles.subtitle}>{subTitle}</p>
    //         <button className={styles.btnTwo}>{buttonTwo}</button>
    //       </div>
    //     </div>
    //   ));
    // }
    // if (type === "three") {
    //   return (element = (
    //     <div className={`${styles.banner} textStyles`}>
    //       <div className="darkImg">
    //         <img
    //           className={`${styles.bannerImg} img-absolute`}
    //           src={`/img/Banner/banner${nameThree}.png`}
    //           alt="bannerImage"
    //         />
    //       </div>
    //       <div className="lightImg">
    //         <img
    //           className={`${styles.bannerImg} img-absolute`}
    //           src={`/img/Banner/bannerL${nameThree}.png`}
    //           alt="bannerImage"
    //         />
    //       </div>
    //       <div className={`${styles.bannerBody} container`}>
    //         <h1 className={styles.titleThree}>{titleThree}</h1>
    //         <p className={styles.subtitleTwo}>{subTitleTwo}</p>
    //         <div className={styles.inputContainer}>
    //           <input
    //             className={styles.input}
    //             type="text"
    //             placeholder={placeholder}
    //           />
    //           <button className={styles.btnThree}>{buttonThree}</button>
    //         </div>
    //       </div>
    //     </div>
    //   ));
    // {btn && <button className={styles.button}>{btnTxt}</button>}
    // }
    // let button = btn && <button className={styles.button}>{btnTxt}</button>;
  }
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
            <div className={styles.button}>{btn && btn}</div>
          </div>
        ) : (
          <>{btn}</>
        )}
      </div>
    ));
  type === "coming-soon" &&
    (element = (
        <div className={`${styles.comingSoon} ${'textStyles'}`}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.teaser}>Coming Soon!!!</h3>
        </div>
    ));
  {
    /* <div className="darkImg">
          <img
            className={`${styles.bannerImg} img-absolute`}
            src={`/img/Banner/contactBg.png`}
            alt="bannerImage"
          />
        </div>
        <div className="lightImg">
          <img
            className={`${styles.bannerImg} img-absolute`}
            src={`/img/Banner/lBg1.png`}
            alt="bannerImage"
          />
        </div>
        <div className={`${styles.bannerBody} container`}>
          <h1 className={styles.titleThree}>{title}</h1>
          <p className={styles.subtitleTwo}>{teaser}</p>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder={placeholder}
            />
            <button className={styles.btnThree}>{btnTxt}</button>
          </div>
        </div> */
  }

  let wrap = (
    <div className={styles.banner}>
      <div className="darkImg">
        <img
          className={`${"img-absolute"}`}
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
