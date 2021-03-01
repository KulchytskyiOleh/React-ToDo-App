import React, { useState } from "react";
import "./Search.css";
export const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  let searchTodo = (e) => setSearchValue(e.target.value);
  return (
    <form className="searchWrapper">
      <input
        className="input inputSearchTodoText"
        type="text"
        value={searchValue}
        onChange={searchTodo}
        onKeyUp={() => onSearch(searchValue)}
        placeholder="  Search..."
        required
      />
    </form>
  );
};
