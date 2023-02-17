import React, { useState, useEffect } from 'react';

import styles from '../../styles/Loading/Loading.module.scss';

function Loading() {
  const [percentage, setPercentage] = useState(0);

  const [size, setSize] = useState(100);

  function handleAnimationEnd() {
    setSize(200);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 2);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className={`${styles.loading} textStyles`}><div className={styles.onLoad}><p className={styles.content}>{percentage}%</p></div></div>
  );
}

export default Loading;