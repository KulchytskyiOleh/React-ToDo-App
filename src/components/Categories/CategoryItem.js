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
  addInputValue,
}) {
  const editInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editLabel, setEditLabel] = useState(label);
  let inputValueHandler = (e) => setEditLabel(e.target.value);
  // console.log(addInputValue);
  // if (addInputValue === editLabel) console.log("same");
  useEffect(() => {
    if (isEditing) editInput.current.focus();
  }, [isEditing]);
  return (
    <>
      <ul className="categoryListWrapper">
        <li className="categoryItem">
          {isEditing ? (
            <input
              type="text"
              ref={editInput}
              value={editLabel}
              onChange={inputValueHandler}
            />
          ) : (
            <a href="#/" id={`CategoryItem_${item.id}`}>
              {editLabel}
            </a>
          )}
          {showCategorySaveButton ? (
            <button
              className={
                showCategorySaveButton && currentCategoryId === item.id
                  ? "showSaveButton" && "saveEditedCategoryItem"
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
                  : "showSaveButton" && "categoryItemEdit"
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
          <button className="categoryItemDelete">
            <i
              className="fas fa-trash-alt"
              onClick={() => deleteCategoryItem(item.id)}
            />
          </button>
        </li>
      </ul>
    </>
  );
}

export default CategoryItem;
