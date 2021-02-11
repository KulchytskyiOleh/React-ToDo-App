import React, { /* useState, */ useEffect } from "react";
import "./Pagination.css";
function Pagination({ todos, itemsPerPage, currentPage, currentPageHandler }) {
  let numberOfPage = [];
  let numberOfItems = todos.length;
  let paginateItemsCounter = Math.ceil(numberOfItems / itemsPerPage);
  for (let i = 1; i <= paginateItemsCounter; i++) {
    numberOfPage.push(i);
  }
  useEffect(() => {
    if (currentPage === 1) {
      currentPageHandler(1);
    } else if (currentPage) {
      currentPageHandler(paginateItemsCounter);
    }
  }, [currentPage, currentPageHandler, paginateItemsCounter]);
  return (
    <div className={numberOfPage.length <= 1 ? "Paginate" : "Paginate Active"}>
      <ul>
        <li>
          <button
            onClick={() => {
              currentPageHandler(currentPage <= 1 ? 1 : currentPage - 1);
            }}
          >
            &laquo;
          </button>
        </li>
        {numberOfPage.map((number) => (
          <li key={number}>
            <button
              className={currentPage === number ? "ActivePage" : null}
              onClick={() => currentPageHandler(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              currentPageHandler(
                currentPage >= paginateItemsCounter
                  ? paginateItemsCounter
                  : currentPage + 1
              )
            }
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
