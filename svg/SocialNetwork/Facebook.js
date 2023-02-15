import React from "react";

const Facebook = ({ className, ...props }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_2352_256)">
        <path d="M11.5489 20.9512V11.8289H14.6097L15.0689 8.27273H11.5489V6.00264C11.5489 4.97337 11.8336 4.27194 13.3112 4.27194L15.1928 4.27116V1.0904C14.8674 1.04812 13.7504 0.951172 12.4505 0.951172C9.73586 0.951172 7.87739 2.60814 7.87739 5.65044V8.27273H4.80737V11.8289H7.87739V20.9512H11.5489Z" />
      </g>
    </svg>
  );
};

export default Facebook;
