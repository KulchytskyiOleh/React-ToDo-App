import React, { useRef, useState } from "react";
import CategoryItem from "./CategoryItem";
import "./Categories.css";
function Categories({
  categories,
  addNewCategory,
  editCategoryItem,
  deleteCategoryItem,
  saveEditedCategoryItem,
  showCategorySaveButton,
  categoriesHandler,
  currentCategoryId,
}) {
  let addInputValueHandler = (e) => {};
  const categoryInput = useRef("");
  const [addInput, setAddInput] = useState("");
  return (
    <div className="categories">
      <div className="categoryItemWrapper">
        <p>Category</p>
        {categories.map((item) => (
          <CategoryItem
            item={item}
            key={item.id}
            id={item.id}
            label={item.label}
            currentCategoryId={currentCategoryId}
            editCategoryItem={editCategoryItem}
            deleteCategoryItem={deleteCategoryItem}
            saveEditedCategoryItem={saveEditedCategoryItem}
            showCategorySaveButton={showCategorySaveButton}
            categoriesHandler={categoriesHandler}
            addInputValue={addInput}
          />
        ))}
        <input
          ref={categoryInput}
          type="text"
          onChange={addInputValueHandler}
        />
        <button
          onClick={() => {
            addNewCategory(categories, categoryInput.current.value);
            setAddInput(categoryInput.current.value);
            console.log(addInput)
            categoryInput.current.value = "";
          }}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Categories;
