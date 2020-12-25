import React, { useState } from "react";
import "./DateSelector.css";
function DateSelector({ currentDayHandler }) {
  const [value, setValue] = useState();
  let dateHandler = (e) => setValue(e.target.value);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectionComplete, toggleSelectionComplete] = useState(false);

  let sDate = new Date(startDate);
  let eDate = new Date(endDate);
  const handleDateChange = (e) => {
    if (!selectionComplete && !startDate) {
      setStartDate(e.target.value);
      return;
    }
    if (!selectionComplete && startDate && !endDate) {
      //on second date selection, set the end date
      setEndDate(e.target.value);
      toggleSelectionComplete(true);
      //do stuff with date range
      return;
    }

    if (selectionComplete && startDate && endDate) {
      //on third date selection, begin selection of a new date range
      //reset the start date and clear the end date.

      setStartDate(e.target.value);
      setEndDate(undefined);
      toggleSelectionComplete(false);
      return;
    }
  };

  console.log(sDate, "sDate");
  console.log(eDate, "eDate");
  if (sDate > eDate) console.log(sDate > endDate, "startDate > endDate");
  else if (sDate < eDate) console.log(sDate < eDate, "startDate < endDate");
  const handleSelect = (e) => {
    //onChange is not fired if selecting same date - workaround to fire handleDateChange
    if (
      !selectionComplete &&
      startDate &&
      !endDate &&
      sameDay(e.target.value, startDate)
    ) {
      handleDateChange(e.target.value);
    }
  };

  const sameDay = (d1, d2) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  console.log(startDate, "startDate");
  console.log(endDate, "endDate");
  if (value === "Today") {
    console.log("Today");
  } else if (value === "This Week") {
    console.log("This Week");
  } else if (value === "This Month") {
    console.log("This Month");
  }

  return (
    <div className="dateSelectorWrapper">
      <select
        className="dateSelector"
        onChange={dateHandler}
        defaultValue="Today"
      >
        <option value="Today">Today</option>
        <option value="This Week">This Week</option>
        <option value="This Month">This Month</option>
      </select>
      <input
        type="date"
        className="datePicker"
        onChange={handleDateChange}
        onSelect={handleSelect}
      />
    </div>
  );
}
export default DateSelector;
