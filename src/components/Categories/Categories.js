import React, { useEffect, useRef } from "react";
import CategoryItem from "./CategoryItem";
import "./Categories.css";
function Categories({
  todos,
  categories,
  addNewCategory,
  editCategoryItem,
  deleteCategoryItem,
  saveEditedCategoryItem,
  showCategorySaveButton,
  categoriesHandler,
  currentCategory,
  currentCategoryHandler,
  currentCategoryId,
  deleteCategory,
  addCategory,
}) {
  const categoryInput = useRef("");
  useEffect(() => {
    if (!currentCategory) categoryInput.current.focus();
  }, [currentCategory]);

  return (
    <div className="Categories">
      <div className="categoryWrapper">
        {categories.length < 1 ? (
          <p className="categoryTitle">No category</p>
        ) : (
          <p className="categoryTitle">Current category</p>
        )}
        <ul className="categoryListWrapper">
          {categories.map((item) =>
            currentCategory === item.label ? (
              <CategoryItem
                item={item}
                key={item.id}
                id={item.id}
                label={item.label}
                currentCategory={currentCategory}
                currentCategoryId={currentCategoryId}
                currentCategoryHandler={currentCategoryHandler}
                editCategoryItem={editCategoryItem}
                deleteCategoryItem={deleteCategoryItem}
                deleteCategory={deleteCategory}
                saveEditedCategoryItem={saveEditedCategoryItem}
                showCategorySaveButton={showCategorySaveButton}
                categoriesHandler={categoriesHandler}
                todos={todos}
              />
            ) : null
          )}
        </ul>
        <div className="categoryItemAddWrapper">
          <input
            className="categoryItemAddInput"
            ref={categoryInput}
            type="text"
          />
          <button
            className="categoryButton categoryItemAddButton"
            onClick={() => {
              addNewCategory(categories, categoryInput.current.value);
              categoryInput.current.value = "";
              addCategory();
            }}
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
