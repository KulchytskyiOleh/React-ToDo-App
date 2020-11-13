import React, { useState } from "react";

function Search(props) {
  
  const [value, setValue] = useState("");
  let searchTodo = (e) => setValue(e.target.value);

  return (
    <div>
      <input
        className="input inputSearchTodoText"
        type="text"
        value={value}
        onChange={searchTodo}
        onKeyDown={() => props.onSearch(value)}
        /*         onKeyDown={(e) => (e.key === "Enter" ? props.onSearch(value) : null)} */
        placeholder="  Search..."
        required
      />
    </div>
  );
}

export default Search;
