import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import todosData, { addTodo, contacts } from "./components/Data/todosData";

ReactDOM.render(
  <App contacts={contacts} todosData={todosData} addTodo={addTodo} />,
  document.getElementById("root")
);
