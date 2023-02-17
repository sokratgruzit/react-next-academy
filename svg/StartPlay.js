import React from "react";

const StartPlay = ({ className, ...props }) => {
  return (
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="#F7F7F7"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M0 0V14L11 7L0 0Z" />
    </svg>
  );
};

export default StartPlay;
