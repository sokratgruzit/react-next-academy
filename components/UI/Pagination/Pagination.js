import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../../styles/UI/Pagination/ItemsWrapper.module.scss";

const Pagination = ({ type, paginationData, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    if (Array.isArray(paginationData)) {
      setNumPages(Math.ceil(paginationData.length / itemsPerPage));
    } else {
      ("");
      setNumPages(1);
    }
  }, [paginationData, itemsPerPage]);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPageNumbers = () => {
    if (numPages <= 1) {
      return null;
    }

    const leftEnd = currentPage - 3 <= 0 ? 1 : currentPage - 3;
    const rightEnd = currentPage + 3 >= numPages ? numPages : currentPage + 3;
    const middlePages = [];
    for (let i = leftEnd; i <= rightEnd; i++) {
      middlePages.push(i);
    }

    const pageButtons = middlePages.map((page) => (
      <li key={page} className={currentPage === page ? styles.active : null}>
        <button
          className={`item ${page === currentPage ? "active" : ""}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      </li>
    ));

    return (
      <>
        <li>
          <button
            className={`item prev ${currentPage === 1 ? "disabled" : ""}`}
            onClick={handlePrevClick}
            disabled={currentPage === 1}
          ></button>
        </li>

        {leftEnd > 2 && <li className="item">...</li>}
        {pageButtons}
        {rightEnd < numPages - 1 && <li className="item">...</li>}

        <li>
          <button
            className={`item next ${
              currentPage === numPages ? "disabled" : ""
            }`}
            onClick={handleNextClick}
            disabled={currentPage === numPages}
          ></button>
        </li>
      </>
    );
  };

  let currentItems = [];
  if (Array.isArray(paginationData)) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    currentItems = paginationData.slice(indexOfFirstItem, indexOfLastItem);
  }

  return (
    <div>
      <div
        className={`container ${type === "column" ? styles.articleList : ""}`}
      >
        {currentItems.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <ul className={`pagination ${styles.pagination}`}>
        {renderPageNumbers()}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  type: PropTypes.string,
  paginationData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  initialPage: PropTypes.number,
};

export default Pagination;
