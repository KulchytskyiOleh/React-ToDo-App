import React from "react";
import "./Content.css";
import Practice from "./Practice/Practice";

function Content(props) {
  return (
    <main className="content">
      <Practice todosData={props.todosData} addTodo={props.addTodo} />
    </main>
  );
}
export default Content;