import React from "react";
import "./Status.css";
export default function Status({ statusSwitchHandler }) {
  let statusHandler = (e) => statusSwitchHandler(e.target.value);
  return (
    <>
      <select onChange={statusHandler} className="statusSelect">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
