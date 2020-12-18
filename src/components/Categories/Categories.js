import React, { useRef } from "react";
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
}) {
  const categoryInput = useRef("");

  return (
    <div className="Categories">
      <div className="categoryWrapper">
        <p className="categoryTitle">Category</p>
        <ul className="categoryListWrapper">
          {categories.map((item) => (
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
              saveEditedCategoryItem={saveEditedCategoryItem}
              showCategorySaveButton={showCategorySaveButton}
              categoriesHandler={categoriesHandler}
              todos={todos}
            />
          ))}
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
