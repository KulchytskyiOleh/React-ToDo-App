import React from "react";
import { useState, useRef, useEffect } from "react";

export default function TodoItem({
  showButton,
  item,
  handleChange,
  toggleButton,
  deleteItem,
  textEdit,
  saveEditedText,
  currentItemId,
  currentCategory,
}) {
  const inputTodoEditedText = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);
  let inputEditedTodoValueHandler = (e) => setEditedText(e.target.value);
  // const [state, setState] = useState(showButton);

  useEffect(() => {
    if (isEditing) inputTodoEditedText.current.focus();
  }, [isEditing]);

  return (
    <div className="todo-item">
      <input
        className="checkBoxItem"
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      {isEditing ? (
        <input
          className="todoItemInput"
          type="text"
          ref={inputTodoEditedText}
          onChange={inputEditedTodoValueHandler}
          value={editedText}
        />
      ) : (
        <p
          className={`${item.completed ? "Completed" : "todoText"} `}
          onClick={() => handleChange(item.id)}
        >
          {editedText}
        </p>
      )}
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
          <i className="far fa-save" />
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
          <i className="far fa-edit" />
        </button>
      )}

      <button className="todoItemDelete" onClick={() => deleteItem(item.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
