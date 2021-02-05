import React, { useState } from "react";
import "./Pagination.css";
function Pagination({
  todos,
  itemsPerPage,
  currentPage,
  currentPageHandler,
  filteredTodos,
}) {

  let numberOfItems = todos.length;
  let numberOfPage = Math.ceil(numberOfItems / itemsPerPage);
  // console.log(todos, "todos");
  // console.log(numberOfItems, "numberOfItems");


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
