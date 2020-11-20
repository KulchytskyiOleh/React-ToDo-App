import React from "react";
import { useState } from "react";

export default function TodoItem({
  showButton,
  item,
  handleChange,
  toggleButton,
  deleteItem,
  textEdit,
}) {
  const [state, setState] = useState(showButton);

  return (
    <div className="todo-item">
      <input
        id="inp"
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      <p className={`${item.completed ? "Completed" : "todoText"} `}>
        {item.text}
      </p>
      <button
        className="textEdit"
        onClick={() => {
          setState(() => toggleButton(!state));
          textEdit(item.id);
        }}
      >
        <i className="far fa-edit"> Edit</i>
      </button>
      <button className="todoItemDelete" onClick={() => deleteItem(item.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
