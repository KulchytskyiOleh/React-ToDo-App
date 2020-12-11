import React from "react";
import TodoItem from "./TodoItem";

export default function TodoItemsList({
  todos,
  showButton,
  handleChange,
  toggleButton,
  deleteItem,
  textEdit,
  search,
  status,
  currentPage,
  itemsPerPage,
}) {
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
        // currentItemId={currentItemId}
        toggleButton={toggleButton}
      />
    ));
}
