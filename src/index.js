import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import todosData from "./components/Data/todosData";
import { addTodo } from "./components/Data/todosData";
import { contacts } from "./components/Data/todosData";

ReactDOM.render(
  <App contacts={contacts} todosData={todosData} addTodo={addTodo} />,
  document.getElementById("root")
);
