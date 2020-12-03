import React from "react";

function Pagination({ todos }) {
  let numberOfPage = [];
  let itemsPerPage = 4;
  let numberOfItems = todos.length;
  let paginateItemsCounter = Math.ceil(numberOfItems / itemsPerPage);

  numberOfPage.style = {
    hide: { display: "none" },
    show: { display: "block" },
  };

  for (let i = 1; i <= paginateItemsCounter; i++) {
    numberOfPage.push(i);
  }
  let pageHandler = (e) => console.log(e.target.name);
  /* if (todos.length > itemsPerPage) {
      todos.map((item, index) => {
        // let itemNumber = ++index;
        console.log(item, index + 1);
      });
    }
    console.log(e.target.value);
  }; */

  return (
    <div
      className="Paginate"
      style={
        numberOfPage.length <= 1
          ? numberOfPage.style.hide
          : numberOfPage.style.show
      }
    >
      <ul>
        {numberOfPage.map((number) => (
          <li key={number}>
            <a href="#/" name={number} onClick={pageHandler}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pagination;
