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
}) {
  return todos
    .filter((item) =>
      item.text.toLowerCase().includes(search.trim().toLowerCase())
    )
    .filter((item) => {
      if (status === "all") return true;
      else if (status === "completed") {
        if (item.completed === true) return true;
      } else if (status === "uncompleted") {
        if (item.completed === false) return true;
      }
      return false;
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
