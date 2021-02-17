import React from "react";
import { useState, useRef, useEffect } from "react";

export default function TodoItem({
  showButton,
  item,
  handleChange,
  textEdit,
  saveEditedText,
  deleteItem,
  toggleButton,
  currentItemId,
  category,
  view,
}) {
  const inputTodoEditedText = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);
  let inputEditedTodoValueHandler = (e) => setEditedText(e.target.value);
  useEffect(() => {
    if (isEditing) inputTodoEditedText.current.focus();
  }, [isEditing]);

  return (
    <div className={`${view ? "todo-item-grid" : "todo-item"}`}>
      <input
        className="checkBoxItem"
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      {isEditing ? (
        <input
          className={`${view ? "todoItemInputGrid " : "todoItemInput"}`}
          type="text"
          ref={inputTodoEditedText}
          onChange={inputEditedTodoValueHandler}
          value={editedText}
        />
      ) : (
        <p
          className={`${item.completed ? "todoText Completed" : "todoText"}`}
          onClick={() => handleChange(item.id)}
        >
          {editedText}
        </p>
      )}
      <span className="todoItemCategory">{category}</span>
      {showButton ? (
        <button
          className={`${"saveEditedText"} ${
            showButton && currentItemId === item.id
              ? "showButton"
              : "hideButton"
          }`}
          onClick={() => {
            saveEditedText(item.id, editedText);
            toggleButton(!showButton);
            setIsEditing(!isEditing);
          }}
        >
          <i className="fas fa-save" />
        </button>
      ) : (
        <button
          className={`${"textEdit"} ${
            showButton && currentItemId === item.id
              ? "hideButton"
              : "showButton"
          }`}
          onClick={() => {
            textEdit(item.id, editedText);
            toggleButton(!showButton);
            setIsEditing(!isEditing);
          }}
        >
          <i className="fas fa-pen" />
        </button>
      )}

      <button
        className="todoItemDelete"
        onClick={() => {
          if (isEditing) return;
          else {
            deleteItem(item.id);
          }
        }}
      >
        <i className="fas fa-trash" />
      </button>
    </div>
  );
}
