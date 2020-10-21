import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import todosData from "./components/todosData";
import { addTodo } from "./components/todosData";
import { contacts } from "./components/todosData";

ReactDOM.render(
  <App contacts={contacts} todosData={todosData} addTodo={addTodo} />,
  document.getElementById("root")
);
