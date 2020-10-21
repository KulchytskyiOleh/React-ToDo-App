import React from "react";

function Pagination(props) {
  let numberOfPage = [];
  let startRenderItems = 4;
  let numberOfItems = props.countTodos.todosData.length;
  for (let i = 1; i < Math.ceil(numberOfItems / startRenderItems); i++) {
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
