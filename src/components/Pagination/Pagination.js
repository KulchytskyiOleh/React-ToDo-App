import React, {/*  useState */ } from "react";
import "./Pagination.css";
function Pagination({
  sameCategoryList,
  itemsPerPage,
  currentPage,
  currentPageHandler,
  // currentCategory,
}) {
  let numberOfItems = sameCategoryList.length;
  let numberOfPage = Math.ceil(numberOfItems / itemsPerPage);
  const items = [];


  for (let i = 1; i <= numberOfPage; i++) {
    items.push(
      <li key={i}>
        <button
          className={currentPage === i ? "ActivePage" : null}
          onClick={() => currentPageHandler(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  return (
    <div className={numberOfPage <= 1 ? "Paginate" : "Paginate Active"}>
      <ul>{items}</ul>
    </div>
  );
}
export default Pagination;
