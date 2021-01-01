import React /* useState  */ from "react";
import "./Pagination.css";
function Pagination({
  todos,
  itemsPerPage,
  currentPage,
  currentPageHandler,
  currentCategory,
}) {
  let sameCategoryList = [];
  todos.filter((item) => {
    if (item.category === currentCategory) {
      return sameCategoryList.push(item);
    }
    return item;
  });
if(sameCategoryList){
  
}

  let numberOfPage = [];
  let numberOfItems = sameCategoryList.length;
  let paginateItemsCounter = Math.ceil(numberOfItems / itemsPerPage);

  for (let i = 1; i <= paginateItemsCounter; i++) {
    numberOfPage.push(i);
  }

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
