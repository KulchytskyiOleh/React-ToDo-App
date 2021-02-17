import React, { useState } from "react";

export const AddForm = ({
  newTodoCategory,
  categories,
  addTodo,
  newTodoCategoryHandler,
}) => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    setInputText(e.target.value);
  };

  let onSubmit = () => {
    addTodo(inputText);
    setInputText("");
  };

  return (
    <div className="addTodoWrapper">
      <form className="addTodoWrapperForm">
        <input
          autoFocus={true}
          className="input inputTodoText"
          type="text"
          placeholder="Add some new todo here..."
          required
          value={inputText}
          onChange={inputHandler}
        />
        <select
          value={newTodoCategory}
          className="addTodoSelect"
          onChange={newTodoCategoryHandler}
        >
          <option>Choose category</option>
          {categories.map((item) => (
            <option value={item.label} key={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <button className="addButton" type="button" onClick={() => onSubmit()}>
          <i className="fas fa-plus fa-lg" />
        </button>
      </form>
    </div>
  );
};
