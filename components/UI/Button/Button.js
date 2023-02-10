import React, { useState, useEffect } from "react";

import styles from "./Button.module.scss";

const Button = ({ title, className, size, color, svg, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[className]} ${styles[color]} ${styles[size]}`}
    >
      {svg}
      {title}
    </button>
  );
};

export default Button;
