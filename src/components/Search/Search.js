import React, { useState } from "react";
import "./Search.css";
export const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");
  let searchTodo = (e) => setValue(e.target.value);
  return (
    <div className="searchWrapper">
      <input
        className="input inputSearchTodoText"
        type="text"
        value={value}
        onChange={searchTodo}
        onKeyDown={() => onSearch(value)}
        // onKeyDown={(e) => (e.key === "Enter" ? onSearch(value) : null)}
        placeholder="  Search..."
        required
      />
    </div>
  );
};
