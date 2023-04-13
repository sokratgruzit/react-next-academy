import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlideIcons(props) {
  const swiper = useSwiper();
  return (
    <div>
      <button
        style={{ marginRight: "20px" }}
        onClick={() => swiper?.slidePrev()}
      >
        <svg
          style={props.customStyles}
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.373047 5C0.373047 4.76981 0.464516 4.54905 0.627332 4.38628L4.76057 0.254214C5.09962 -0.084737 5.64932 -0.0847371 5.98837 0.254214C6.32742 0.593164 6.32742 1.14271 5.98837 1.48166L2.46903 5L5.98837 8.51834C6.32742 8.85729 6.32742 9.40684 5.98837 9.74579C5.64932 10.0847 5.09962 10.0847 4.76057 9.74579L0.627332 5.61372C0.464516 5.45095 0.373047 5.23019 0.373047 5Z"
            fill="#0500FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.486328 4.99925C0.486328 4.5199 0.875028 4.13131 1.35451 4.13131L12.8145 4.13131C13.294 4.13131 13.6827 4.5199 13.6827 4.99925C13.6827 5.4786 13.294 5.86719 12.8145 5.86719L1.35451 5.86719C0.875028 5.86719 0.486328 5.4786 0.486328 4.99925Z"
            fill="#0500FF"
          />
        </svg>
      </button>
      <button onClick={() => swiper?.slideNext()}>
        <svg
          style={props.customStyles}
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 5C14 4.76981 13.9085 4.54905 13.7457 4.38628L9.61248 0.254214C9.27343 -0.084737 8.72372 -0.0847371 8.38468 0.254214C8.04563 0.593164 8.04563 1.14271 8.38468 1.48166L11.904 5L8.38468 8.51834C8.04563 8.85729 8.04563 9.40684 8.38468 9.74579C8.72372 10.0847 9.27343 10.0847 9.61248 9.74579L13.7457 5.61372C13.9085 5.45095 14 5.23019 14 5Z"
            fill="#0500FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8867 4.99925C13.8867 4.5199 13.498 4.13131 13.0185 4.13131L1.5585 4.13131C1.07901 4.13131 0.690312 4.5199 0.690312 4.99925C0.690312 5.4786 1.07901 5.86719 1.5585 5.86719L13.0185 5.86719C13.498 5.86719 13.8867 5.4786 13.8867 4.99925Z"
            fill="#0500FF"
          />
        </svg>
      </button>
      
    </div>
  );
}
