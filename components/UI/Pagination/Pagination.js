import { usePagination, DOTS } from "../../../hooks/usePagination";

import styles from "../../../styles/UI/Pagination/Pagination.module.scss";

export const Pagination = ({
  paginationEvent,
  paginationTotal,
  siblingPagination = 1,
  paginationCurrent,
  customStyles,
}) => {
  const paginationRange = usePagination({
    paginationCurrent,
    paginationTotal,
    siblingPagination,
  });

  if (paginationCurrent === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    paginationEvent(paginationCurrent + 1);
  };

  const onPrevious = () => {
    paginationEvent(paginationCurrent - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div style={customStyles}>
      <div className={styles.pagination}>
        <div className={styles.paginationInner}>
          <div
            className={`${styles.prev} ${
              paginationCurrent === 1 && styles.disabled
            }`}
            onClick={onPrevious}
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.paginationSvg}
            >
              <path
                d="M5.66663 1.70095L1.83899 5.52859C1.38695 5.98063 1.38695 6.72032 1.83899 7.17236L5.66663 11"
                stroke="#9C9DA3"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return <div key={index}>...</div>;
            }

            return (
              <div
                key={index}
                className={`${
                  pageNumber === paginationCurrent ? styles.activeElement : ""
                }`}
                onClick={() => paginationEvent(pageNumber)}
              >
                {pageNumber}
              </div>
            );
          })}
          <div
            className={`${styles.next} ${
              paginationCurrent === lastPage && styles.disabled
            }`}
            onClick={onNext}
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.paginationSvg}
            >
              <path
                d="M1.33337 1.70095L5.16101 5.52859C5.61305 5.98063 5.61305 6.72032 5.16101 7.17236L1.33337 11"
                stroke="#9C9DA3"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
