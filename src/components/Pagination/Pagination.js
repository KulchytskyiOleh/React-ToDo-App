import React, { useEffect } from "react";
import "./Pagination.css";
function Pagination({
  todos,
  itemsPerPage,
  currentPage,
  currentPageHandler,
  currentTodos,
}) {
  let numberOfPage = [];
  let numberOfItems = todos.length;
  let paginateItemsCounter = Math.ceil(numberOfItems / itemsPerPage);
  let numberTodos = currentTodos.length;
  for (let i = 1; i <= paginateItemsCounter; i++) {
    numberOfPage.push(i);
  }
  useEffect(() => {
    if (numberTodos === 0) {
      currentPageHandler(paginateItemsCounter);
    }
  }, [currentPage, currentPageHandler, paginateItemsCounter, numberTodos]);

  return (
    <div className={numberOfPage.length <= 1 ? "Paginate" : "Paginate Active"}>
      <ul>
        <li>
          <button
            onClick={() => {
              currentPageHandler(currentPage <= 1 ? 1 : currentPage - 1);
            }}
          >
            <i className="fas fa-angle-double-left fa-sm" />
          </button>
        </li>
        {numberOfPage.map((number) => (
          <li key={number}>
            <button
              className={currentPage === number ? "ActivePage" : null}
              onClick={() => {
                currentPageHandler(number);
              }}
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
            <i className="fas fa-angle-double-right" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
