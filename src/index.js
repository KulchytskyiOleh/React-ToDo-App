import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import todosData, { contacts } from "./components/Data/todosData";

ReactDOM.render(
  <App contacts={contacts} todosData={todosData} />,
  document.getElementById("root")
);
