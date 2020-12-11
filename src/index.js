import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import todosData, { contacts, Categories } from "./components/Data/todosData";

ReactDOM.render(
  <App contacts={contacts} todosData={todosData} Categories={Categories} />,
  document.getElementById("root")
);
