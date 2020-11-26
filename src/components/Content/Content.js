import React from "react";
import "./Content.css";
import Practice from "../Practice/Practice";

function Content({ todosData }) {
  return (
    <main className="content">
      <Practice todosData={todosData} />
    </main>
  );
}
export default Content;
