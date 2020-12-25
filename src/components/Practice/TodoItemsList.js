import React from "react";
import TodoItem from "./TodoItem";

export default function TodoItemsList({
  todos,
  showButton,
  handleChange,
  toggleButton,
  textEdit,
  saveEditedText,
  deleteItem,
  search,
  status,
  itemsPerPage,
  currentPage,
  currentItemId,
  currentCategory,
}) {
  // todos.map((item) =>
  //   currentCategory === item.category ? console.log(item) : null
  // );
  return (
    <div className="TodoItemsList">
      {todos
        .filter((item) => (currentCategory === item.category ? item : null))
        .filter((item) => {
          if (status === "all") return true;
          else if (status === "completed" && item.completed === true) {
            return true;
          } else if (status === "uncompleted" && item.completed === false) {
            return true;
          }
          return false;
        })
        .filter((item) =>
          item.text.toLowerCase().includes(search.trim().toLowerCase())
        )
        .filter((item, index) =>
          currentPage && Math.ceil(++index / itemsPerPage) === currentPage
            ? item
            : null
        )
        .map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            currentItemId={currentItemId}
            handleChange={handleChange}
            deleteItem={deleteItem}
            textEdit={textEdit}
            saveEditedText={saveEditedText}
            showButton={showButton}
            currentCategory={currentCategory}
            toggleButton={toggleButton}
          />
        ))}
    </div>
  );
}
