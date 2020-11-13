import React from "react";
import { useState } from "react";

function Status({ state, statusSwitchHandler }) {
  let showActiveTodos = () => {
    state.filter((todo) => {
      return todo.completed === false ? console.log(todo) : null;
    });
    console.log(state);
  };

  let showCompletedTodos = () => {
    state.filter((todo) => {
      return todo.completed === true ? console.log(todo) : null;
    });
    console.log(state);
  };

  return (
    <div>
      <button className="button" onClick={() => showActiveTodos()}>
        Active
      </button>

      <button className="button" onClick={() => showCompletedTodos()}>
        Completed
      </button>
    </div>
  );
}

export default Status;
