import React from "react";
import { useState } from "react";

function TodoItem(props) {
  const completedStyle = {
    color: "green",
    fontStyle: "italic",
    textDecoration: "line-through",
  };
  const [state, setState] = useState(props.showButton);

  return (
    <div className="todo-item">
      <input
        id="inp"
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p
        className="todoText"
        style={props.item.completed ? completedStyle : null}
      >
        {props.item.text}
      </p>
      <button
        className="textEdit"
        onClick={() => {
          setState(props.toggleButton(!state));
          props.textEdit(props.item.id);
        }}
      >
        <i className="far fa-edit"> Edit</i>
      </button>
      <button
        className="todoItemDelete"
        onClick={() => props.deleteItem(props.item.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
export default TodoItem;
