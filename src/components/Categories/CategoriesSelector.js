import React from "react";

function CategoriesSelector({
  categories,
  currentCategory,
  categorySwitchHandler,
}) {
  let categoryHandler = (e) => {
    categorySwitchHandler(e.target.value);
  };

  return (
    <div className="categoriesSelectorWrapper ">
      <select
        className="selectorTop categoriesSelector"
        onChange={categoryHandler}
        defaultValue={currentCategory}
        name="Category list"
      >
        <option value="">Select category</option>
        {categories.map((item) => (
          <option value={item.label} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>

    </div>
  );
}

export default CategoriesSelector;
