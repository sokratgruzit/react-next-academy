import InstructorItem from "../../components/Instructors/InstructorItem";

const DUMMY_DATA = [
  {
    id: 0,
    name: "Jack Jones",
    text: "Making sure that our products exceed customer expectations for quality and performance.",
    img: "/img/InstructorImgs/JackJones.png",
    stat: [
      {
        value: 4,
        name: "Rating",
        icon: (
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2299 2.51063L14.9899 6.03063C15.2299 6.52063 15.8699 6.99063 16.4099 7.08063L19.5999 7.61062C21.6399 7.95062 22.1199 9.43062 20.6499 10.8906L18.1699 13.3706C17.7499 13.7906 17.5199 14.6006 17.6499 15.1806L18.3599 18.2506C18.9199 20.6806 17.6299 21.6206 15.4799 20.3506L12.4899 18.5806C11.9499 18.2606 11.0599 18.2606 10.5099 18.5806L7.51991 20.3506C5.37991 21.6206 4.07991 20.6706 4.63991 18.2506L5.34991 15.1806C5.47991 14.6006 5.24991 13.7906 4.82991 13.3706L2.34991 10.8906C0.889909 9.43062 1.35991 7.95062 3.39991 7.61062L6.58991 7.08063C7.11991 6.99063 7.75991 6.52063 7.99991 6.03063L9.75991 2.51063C10.7199 0.600625 12.2799 0.600625 13.2299 2.51063Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        value: 9,
        name: "reviews",
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 9C19.5 10.45 19.07 11.78 18.33 12.89C17.25 14.49 15.54 15.62 13.55 15.91C13.21 15.97 12.86 16 12.5 16C12.14 16 11.79 15.97 11.45 15.91C9.46 15.62 7.75 14.49 6.67 12.89C5.93 11.78 5.5 10.45 5.5 9C5.5 5.13 8.63 2 12.5 2C16.37 2 19.5 5.13 19.5 9Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.7501 18.4684L20.1001 18.8584C19.7301 18.9484 19.4401 19.2284 19.3601 19.5984L19.0101 21.0685C18.8201 21.8685 17.8001 22.1085 17.2701 21.4785L12.5001 15.9984L7.73008 21.4884C7.20008 22.1184 6.18008 21.8784 5.99008 21.0784L5.64008 19.6084C5.55008 19.2384 5.26008 18.9484 4.90008 18.8684L3.25008 18.4785C2.49008 18.2985 2.22008 17.3484 2.77008 16.7984L6.67008 12.8984C7.75008 14.4984 9.46008 15.6285 11.4501 15.9185C11.7901 15.9785 12.1401 16.0085 12.5001 16.0085C12.8601 16.0085 13.2101 15.9785 13.5501 15.9185C15.5401 15.6285 17.2501 14.4984 18.3301 12.8984L22.2301 16.7984C22.7801 17.3384 22.5101 18.2884 21.7501 18.4684Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.08 5.98L13.67 7.15999C13.75 7.31999 13.96 7.48 14.15 7.51L15.22 7.68999C15.9 7.79999 16.06 8.3 15.57 8.79L14.74 9.61998C14.6 9.75998 14.52 10.03 14.57 10.23L14.81 11.26C15 12.07 14.57 12.39 13.85 11.96L12.85 11.37C12.67 11.26 12.37 11.26 12.19 11.37L11.19 11.96C10.47 12.38 10.04 12.07 10.23 11.26L10.47 10.23C10.51 10.04 10.44 9.75998 10.3 9.61998L9.46997 8.79C8.97997 8.3 9.13997 7.80999 9.81997 7.68999L10.89 7.51C11.07 7.48 11.28 7.31999 11.36 7.15999L11.95 5.98C12.24 5.34 12.76 5.34 13.08 5.98Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        value: 25,
        name: "Students",
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.65957 10.87C9.55957 10.86 9.43957 10.86 9.32957 10.87C6.94957 10.79 5.05957 8.84 5.05957 6.44C5.05957 3.99 7.03957 2 9.49957 2C11.9496 2 13.9396 3.99 13.9396 6.44C13.9296 8.84 12.0396 10.79 9.65957 10.87Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9103 4C18.8503 4 20.4103 5.57 20.4103 7.5C20.4103 9.39 18.9103 10.93 17.0403 11C16.9603 10.99 16.8703 10.99 16.7803 11"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.65973 14.56C2.23973 16.18 2.23973 18.82 4.65973 20.43C7.40973 22.27 11.9197 22.27 14.6697 20.43C17.0897 18.81 17.0897 16.17 14.6697 14.56C11.9297 12.73 7.41973 12.73 4.65973 14.56Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.8398 20C19.5598 19.85 20.2398 19.56 20.7998 19.13C22.3598 17.96 22.3598 16.03 20.7998 14.86C20.2498 14.44 19.5798 14.16 18.8698 14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        value: 4,
        name: "Courses",
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.59961 11.9995V10.5195C9.59961 8.6095 10.9496 7.8395 12.5996 8.7895L13.8796 9.5295L15.1596 10.2695C16.8096 11.2195 16.8096 12.7795 15.1596 13.7295L13.8796 14.4695L12.5996 15.2095C10.9496 16.1595 9.59961 15.3795 9.59961 13.4795V11.9995Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
    courses: [
      {
        title: "Kak Kushat Xui",
        price: "Free",
        level: "Legendary",
        language: "ENG",
        time: "120hrs",
      },
    ],
  },
];

const Instructor = () => {
  return <InstructorItem data={DUMMY_DATA} />;
};

export default Instructor;
