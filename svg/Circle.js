import React from "react";

const Circle = ({ className, ...props }) => {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="#259C55"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="4" cy="4.5" r="4" />
    </svg>
  );
};

export default Circle;
