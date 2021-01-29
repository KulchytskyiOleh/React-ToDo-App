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
        {/* <label className="categoryListLabel" for="Category list">
          Choose category: 
        </label> */}
        {categories.length >= 1 ? (
          <select
            onChange={categoryHandler}
            value={currentCategory}
            name="Category list"
          >
            {categories.map((item) => (
              <option value={item.label} key={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        ) : null}
      </form>
    </div>
  );
}

export default CategoriesSelector;
