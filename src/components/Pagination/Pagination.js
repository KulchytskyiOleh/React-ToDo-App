import React from "react";

function Pagination({ todos }) {
  let numberOfPage = [];
  let itemsPerPage = 4;
  let numberOfItems = todos.length;
  let paginateItemsCounter = Math.ceil(numberOfItems / itemsPerPage);
  for (let i = 1; i < paginateItemsCounter; i++) {
    numberOfPage.push(i);
  }

  return (
    <div className="Paginate">
      <ul>
        {numberOfPage.map((number) => (
          <li key={number}>
            <a href="#/">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pagination;
