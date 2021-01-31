import React, { useEffect, useState } from "react";
// import Pagination from "../Pagination/Pagination";
import TodoItem from "./TodoItem";

export default function TodoItemsList({
  todos,
  search,
  textEdit,
  showButton,
  handleChange,
  toggleButton,
  saveEditedText,
  deleteItem,
  itemsPerPage,
  currentPage,
  currentPageHandler,
  currentItemId,
  currentCategory,
  currentDateRange,
  category,
  sameCategoryList,
  today,
  status,
  month,
}) {
  useEffect(() => {

  }, [])
  let dayAdd = (numberDays) => {
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + numberDays
    );
  };

  let daySubst = (numberDays) => {
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - numberDays
    );
  };

  let startOfWeek;
  let endOfWeek;
  let getDaysArray = (start, end) => {
    let dates = [];
    let day = new Date(start);
    for (day; day <= end; day.setDate(day.getDate() + 1)) {
      dates.push(new Date(day));
    }
    return dates;
  };

  return (
    <div className="TodoItemsList">
      {todos
        .filter(item => {
          if (currentCategory === "Select category") return true
          else if (currentCategory === "My todos" && item.category === currentCategory) { return true }
          else if (currentCategory === "Hobby" && item.category === currentCategory) { return true }
          else if (currentCategory === "Other" && item.category === currentCategory) { return true }
          return false;
        })
        .filter((item) => {
          if (status === "all") return true;
          else if (status === "completed" && item.completed === true) {
            return true;
          } else if (status === "uncompleted" && item.completed === false) {
            return true;
          }
          return false;
        })
        .filter((item) => {
          if (currentDateRange === "") {
            return true;
          } else if (
            currentDateRange === "Today" &&
            item.date.toLocaleDateString() === today.toLocaleDateString()
          ) {
            return true;
          } else if (currentDateRange === "This Week") {
            switch (today.getDay()) {
              case 0:
                startOfWeek = daySubst(6);
                endOfWeek = dayAdd(0);
                break;
              case 1:
                startOfWeek = daySubst(0);
                endOfWeek = dayAdd(6);
                break;
              case 2:
                startOfWeek = daySubst(1);
                endOfWeek = dayAdd(5);
                break;
              case 3:
                startOfWeek = daySubst(2);
                endOfWeek = dayAdd(4);
                break;
              case 4:
                startOfWeek = daySubst(3);
                endOfWeek = dayAdd(3);
                break;
              case 5:
                startOfWeek = daySubst(4);
                endOfWeek = dayAdd(2);
                break;
              case 6:
                startOfWeek = daySubst(5);
                endOfWeek = dayAdd(1);
                break;
              default:
                break;
            }
            let dayList = getDaysArray(
              new Date(startOfWeek),
              new Date(endOfWeek)
            );
            let thisWeek = dayList.map((day) => day.toLocaleDateString());
            if (thisWeek.includes(item.date.toLocaleDateString())) return true;
          } else if (currentDateRange === "This Month") {
            let startMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            let endMonth = new Date(
              today.getFullYear(),
              month[today.getMonth()],
              1 - 1
            );
            let dayList = getDaysArray(
              new Date(startMonth),
              new Date(endMonth)
            );
            let thisMonth = dayList.map((day) => day.toLocaleDateString());
            if (thisMonth.includes(item.date.toLocaleDateString())) return true;
          }
          return false;
        })



        .filter((item) =>
          item.text.toLowerCase().includes(search.trim().toLowerCase())
        )
        .reverse()
        .filter((item, index) =>
          Math.ceil(++index / itemsPerPage) === currentPage ? item : null
        )
        .map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            currentItemId={currentItemId}
            handleChange={handleChange}
            deleteItem={deleteItem}
            textEdit={textEdit}
            saveEditedText={saveEditedText}
            showButton={showButton}
            currentCategory={currentCategory}
            toggleButton={toggleButton}
          />
        ))}
    </div>
  );
}
