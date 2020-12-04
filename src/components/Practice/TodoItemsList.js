import React from "react";
import TodoItem from "./TodoItem";

export default function TodoItemsList({
  todos,
  showButton,
  handleChange,
  toggleButton,
  deleteItem,
  textEdit,
  currentItemId,
  search,
  status,
  currentPage,
  itemsPerPage,
}) {
  // if (currentPage) {
  //   todos.map((item, index) =>
  //     Math.ceil(++index / itemsPerPage) === currentPage
  //       ? console.log(item)
  //       : null
  //   );
  // }
  // console.log("--------------");

  return todos
    .filter((item) =>
      item.text.toLowerCase().includes(search.trim().toLowerCase())
    )
    .filter((item) => {
      if (status === "all") return true;
      else if (status === "completed" && item.completed === true) {
        return true;
      } else if (status === "uncompleted" && item.completed === false) {
        return true;
      }
      return false;
    })
    .filter((item, index) => {
      if (currentPage && Math.ceil(++index / itemsPerPage) === currentPage)
        return item;
    })
    .map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={handleChange}
        deleteItem={deleteItem}
        textEdit={textEdit}
        showButton={showButton}
        currentItemId={currentItemId}
        toggleButton={toggleButton}
      />
    ));
}
