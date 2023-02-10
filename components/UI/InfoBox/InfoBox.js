import styles from "./InfoBox.module.scss";

const InfoBox = (props) => {
  let element = "";

  if (props.type === "info-box") {
    element = (
      <div className={`${styles.infoBox} ${styles.bg}`}>
        <div className={styles.infoBoxInner}>
          <div className={styles.label}>{props.label}</div>
        </div>
      </div>
    );
  }
  return element;
};

export default InfoBox;

{
  /* <InfoBox
  type={"info-box"}
  label={
    "Our goal is to educate the masses on the exciting potential of blockchain and cryptocurrency technology. Here, you'll find several multilingual articles covering every aspect of blockchain and cryptocurrency technology - ranging from computer security to economics. We know that it can be daunting to learn something new. So, this guide will give you a gentle introduction to some of the key concepts that will help you kick-start your journey into the revolutionary world of blockchain technology."
  }
/>; */
}
