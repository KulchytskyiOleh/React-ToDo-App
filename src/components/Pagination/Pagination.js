import React /* useState  */ from "react";
import "./Pagination.css";
function Pagination({ todos, itemsPerPage, currentPage, currentPageHandler }) {
  let numberOfPage = [];
  let numberOfItems = todos.length;
  let paginateItemsCounter = Math.ceil(numberOfItems / itemsPerPage);

  for (let i = 1; i <= paginateItemsCounter; i++) {
    numberOfPage.push(i);
  }

  // if (currentPage) {
  //   todos.map((item, index) =>
  //     Math.ceil(++index / itemsPerPage) === currentPage
  //       ? console.log(item)
  //       : null
  //   );
  // }
  // console.log("--------------");

  return (
    <div className={numberOfPage.length <= 1 ? "Paginate" : "Paginate Active"}>
      <ul>
        {/* <li>prev</li> */}
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
        {/* <li>next</li> */}
      </ul>
    </div>
  );
}
export default Pagination;
