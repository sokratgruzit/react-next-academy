import React from "react";

const ShareLink = ({ className, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M8.03855 10.7803L4.91363 13.9052C4.53529 14.2704 4.03 14.4744 3.5042 14.4744C2.97839 14.4744 2.47311 14.2704 2.09476 13.9052C1.90921 13.7204 1.76197 13.5008 1.66151 13.2589C1.56104 13.017 1.50933 12.7577 1.50933 12.4958C1.50933 12.2339 1.56104 11.9746 1.66151 11.7327C1.76197 11.4908 1.90921 11.2712 2.09476 11.0864L5.21968 7.96146C5.37134 7.8098 5.45654 7.60411 5.45654 7.38963C5.45654 7.17515 5.37134 6.96946 5.21968 6.8178C5.06802 6.66614 4.86233 6.58094 4.64785 6.58094C4.43338 6.58094 4.22768 6.66614 4.07603 6.8178L0.95111 9.95077C0.321582 10.636 -0.0188858 11.5379 0.000809206 12.4682C0.0205042 13.3985 0.398839 14.2852 1.0568 14.9432C1.71477 15.6012 2.60149 15.9795 3.53178 15.9992C4.46207 16.0189 5.36401 15.6784 6.04923 15.0489L9.1822 11.924C9.25729 11.8489 9.31686 11.7597 9.3575 11.6616C9.39814 11.5635 9.41906 11.4583 9.41906 11.3521C9.41906 11.246 9.39814 11.1408 9.3575 11.0427C9.31686 10.9446 9.25729 10.8554 9.1822 10.7803C9.10711 10.7052 9.01796 10.6457 8.91984 10.605C8.82173 10.5644 8.71657 10.5435 8.61037 10.5435C8.50418 10.5435 8.39902 10.5644 8.3009 10.605C8.20279 10.6457 8.11364 10.7052 8.03855 10.7803V10.7803ZM14.9488 1.05121C14.2713 0.377904 13.3549 0 12.3997 0C11.4446 0 10.5282 0.377904 9.85067 1.05121L6.71771 4.17612C6.64261 4.25121 6.58305 4.34036 6.54241 4.43848C6.50176 4.53659 6.48085 4.64175 6.48085 4.74795C6.48085 4.85415 6.50176 4.9593 6.54241 5.05742C6.58305 5.15553 6.64261 5.24468 6.71771 5.31977C6.7928 5.39487 6.88195 5.45444 6.98006 5.49508C7.07818 5.53572 7.18334 5.55663 7.28953 5.55663C7.39573 5.55663 7.50089 5.53572 7.599 5.49508C7.69712 5.45444 7.78627 5.39487 7.86136 5.31977L10.9863 2.19486C11.3646 1.82972 11.8699 1.62566 12.3957 1.62566C12.9215 1.62566 13.4268 1.82972 13.8051 2.19486C13.9907 2.37969 14.1379 2.59933 14.2384 2.8412C14.3389 3.08307 14.3906 3.34239 14.3906 3.60429C14.3906 3.86619 14.3389 4.12552 14.2384 4.36739C14.1379 4.60925 13.9907 4.8289 13.8051 5.01373L10.6802 8.13864C10.6047 8.21351 10.5448 8.30259 10.5039 8.40073C10.463 8.49888 10.442 8.60415 10.442 8.71047C10.442 8.81679 10.463 8.92206 10.5039 9.0202C10.5448 9.11835 10.6047 9.20742 10.6802 9.2823C10.7551 9.35778 10.8442 9.4177 10.9423 9.45859C11.0405 9.49948 11.1457 9.52053 11.2521 9.52053C11.3584 9.52053 11.4636 9.49948 11.5618 9.45859C11.6599 9.4177 11.749 9.35778 11.8239 9.2823L14.9488 6.14933C15.6221 5.47182 16 4.55544 16 3.60027C16 2.64509 15.6221 1.72872 14.9488 1.05121V1.05121ZM5.39687 10.6031C5.47212 10.6778 5.56137 10.7368 5.6595 10.7769C5.75762 10.817 5.8627 10.8373 5.96869 10.8367C6.07469 10.8373 6.17976 10.817 6.27789 10.7769C6.37601 10.7368 6.46526 10.6778 6.54052 10.6031L10.503 6.64061C10.6547 6.48896 10.7399 6.28326 10.7399 6.06879C10.7399 5.85431 10.6547 5.64862 10.503 5.49696C10.3514 5.3453 10.1457 5.2601 9.93121 5.2601C9.71674 5.2601 9.51104 5.3453 9.35939 5.49696L5.39687 9.45948C5.32138 9.53435 5.26146 9.62343 5.22057 9.72157C5.17968 9.81972 5.15863 9.92499 5.15863 10.0313C5.15863 10.1376 5.17968 10.2429 5.22057 10.341C5.26146 10.4392 5.32138 10.5283 5.39687 10.6031Z" />
    </svg>
  );
};

export default ShareLink;