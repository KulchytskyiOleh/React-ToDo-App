import React, { useState, useRef, useEffect } from "react";

function CategoryItem({
  label,
  item,
  editCategoryItem,
  saveEditedCategoryItem,
  deleteCategoryItem,
  categoriesHandler,
  showCategorySaveButton,
  currentCategoryId,
  currentCategoryHandler,
  currentCategory,
  todos,
}) {
  const editInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editLabel, setEditLabel] = useState(label);
  let inputValueHandler = (e) => setEditLabel(e.target.value);

  useEffect(() => {
    if (isEditing) editInput.current.focus();
  }, [isEditing]);
  return (
    <li
      className={
        currentCategory === item.label
          ? "currentCategory categoryItem"
          : "categoryItem"
      }
    >
      {isEditing ? (
        <input
          className="categoryItemInput"
          type="text"
          ref={editInput}
          value={editLabel}
          onChange={inputValueHandler}
        />
      ) : (
        <a
          className="categoryItemText"
          href="#/"
          // id={`CategoryItem_${item.id}`}
          onClick={() => {
            currentCategoryHandler(editLabel);
          }}
        >
          {editLabel}
        </a>
      )}
      {showCategorySaveButton ? (
        <button
          className={
            showCategorySaveButton && currentCategoryId === item.id
              ? "showSaveButton" && "categoryButton saveEditedCategoryItem"
              : "hideSaveButton"
          }
        >
          <i
            className="fa fa-floppy-o"
            onClick={() => {
              saveEditedCategoryItem(item.id, editLabel);
              categoriesHandler(!showCategorySaveButton);
              setIsEditing(!isEditing);
            }}
          />
        </button>
      ) : (
        <button
          className={
            showCategorySaveButton && currentCategoryId === item.id
              ? "hideSaveButton"
              : "showSaveButton" && "categoryButton categoryItemEdit"
          }
        >
          <i
            className="fa fa-pencil"
            onClick={() => {
              editCategoryItem(item.id, editLabel);
              categoriesHandler(!showCategorySaveButton);
              setIsEditing(!isEditing);
            }}
          />
        </button>
      )}
      <button className="categoryButton categoryItemDelete">
        <i
          className="fas fa-trash-alt"
          onClick={() => {
            deleteCategoryItem(item.id);
          }}
        />
      </button>
    </li>
  );
}

export default CategoryItem;
