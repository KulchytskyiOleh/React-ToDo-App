import React /* useState */ from "react";

function CategoriesSelector({
  categories,
  currentCategory,
  categorySwitchHandler,
}) {
  let categoryHandler = (e) => {
    categorySwitchHandler(e.target.value);
  };

  return (
    <div className="categoriesSelector">
      <form>
        <select
          onChange={categoryHandler}
          daefaultValue={currentCategory}
          name="Category list"
        >
          <option value="Select category">Select category</option>
          {categories.map((item) => (
            <option value={item.label} key={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default CategoriesSelector;
