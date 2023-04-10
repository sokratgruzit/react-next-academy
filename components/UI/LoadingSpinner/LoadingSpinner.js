import { useState, useEffect } from "react";
import styles from "../../../styles/UI/LoadingSpinner/LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 3);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.loadingSpinnerProgress}>{progress}%</div>
    </div>
  );
};

export default LoadingSpinner;
