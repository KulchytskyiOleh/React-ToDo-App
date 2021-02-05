import React from "react";
import "./DateSelector.css";
function DateSelector({ currentDateRangeHandler, currentDateRange }) {
  let dateHandler = (e) => currentDateRangeHandler(e.target.value);
  return (
    <div className="dateSelectorWrapper">
      <select className="dateSelector" onChange={dateHandler}>
        <option value="">Select date</option>
        <option value="Today">Today</option>
        <option value="This Week">This Week</option>
        <option value="This Month">This Month</option>
      </select>
    </div>
  );
}
export default DateSelector;
