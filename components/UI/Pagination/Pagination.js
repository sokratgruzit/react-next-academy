import React, { useState } from "react";
import styles from "../../../styles/UI/Pagination/Pagination.module.scss";

const Pagination = ({ type, paginationData, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(
    Math.ceil(paginationData.length / itemsPerPage)
  );

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const pages = [];
  for (let i = 1; i <= numPages; i++) {
    pages.push(i);
  }

  const renderPageNumbers = () => {
    if (numPages <= 1) {
      return pages.map((page) => (
        <li key={page} className={currentPage === page ? styles.active : null}>
          <button
            className={`item ${page === currentPage ? "active" : ""}`}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        </li>
      ));
    } else {
      const leftEnd = currentPage - 3 <= 0 ? 1 : currentPage - 3;
      const rightEnd = currentPage + 1 >= numPages ? numPages : currentPage + 3;
      const middlePages = [];
      for (let i = leftEnd; i <= rightEnd; i++) {
        middlePages.push(i);
      }
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
          {middlePages.map((page) => (
            <li
              key={page}
              className={currentPage === page ? styles.active : null}
            >
              <button
                className={`item ${page === currentPage ? "active" : ""}`}
                onClick={() => handleClick(page)}
              >
                {page}
              </button>
            </li>
          ))}
          {rightEnd < numPages - 1 && <li className="item">...</li>}

          <li>
            <button
              className={`item next ${
                numPages === currentPage ? "disabled" : ""
              }`}
              onClick={handleNextClick}
              disabled={currentPage === numPages}
            ></button>
          </li>
        </>
      );
    }
  };

  let currentItems = [];
  if (Array.isArray(paginationData)) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    currentItems = paginationData.slice(indexOfFirstItem, indexOfLastItem);
  }

  let element = null;

  if (type === "default") {
    element = (
      <div>
        <div className="container">
          {currentItems.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <ul className={`pagination ${styles.pagination}`}>
          {renderPageNumbers()}
        </ul>
      </div>
    );
  }

  if (type === "column") {
    element = (
      <div>
        <div className={`container ${styles.articleList}`}>
          {currentItems.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <ul className={`pagination ${styles.pagination}`}>
          {renderPageNumbers()}
        </ul>
      </div>
    );
  }

  return element;
};

export default Pagination;