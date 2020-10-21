import React from "react";

function Pagination(props) {
  let numberOfPage = [];
  let itemsPerPage = 4;
  let numberOfItems = props.countTodos;
  let paginateItemsCounter = Math.ceil(numberOfItems / itemsPerPage);

  for (let i = 1; i < paginateItemsCounter; i++) {
    numberOfPage.push(i);
  }

  return (
    <div className="Paginate">
      <ul>
        {numberOfPage.map((number) => (
          <li key={number}>
            <button>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pagination;
