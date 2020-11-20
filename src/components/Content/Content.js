import React from "react";
import "./Content.css";
import Practice from "../Practice/Practice";

function Content({ todosData, addTodo }) {
  return (
    <main className="content">
      <Practice todosData={todosData} addTodo={addTodo} />
    </main>
  );
}
export default Content;
