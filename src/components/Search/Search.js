import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");
  let searchTodo = (e) => setValue(e.target.value);
  return (
    <>
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
    </>
  );
}
