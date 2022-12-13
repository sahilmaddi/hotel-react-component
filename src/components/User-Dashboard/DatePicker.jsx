import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./DatePicker.css";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerDemo() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };
  return (
    <div className="date">
      <div className="input-container">
        <div>
          <label className="label">Check-in</label>
          <DatePicker
            selected={checkInDate}
            minDate={new Date()}
            onChange={handleCheckInDate}
            className="label"
          />
        </div>
        <div>
          <label className="label">Check-out</label>
          <DatePicker
            selected={checkOutDate}
            minDate={checkInDate}
            onChange={handleCheckOutDate}
            className="date-picker"
          />
        </div>
      </div>
      {checkInDate && checkOutDate && (
        <div className="summary">
          <p>
            You book a hotel from {moment(checkInDate).format("LL")} to{" "}
            {moment(checkOutDate).format("LL")}.
          </p>
        </div>
      )}
    </div>
  );
}

export default DatePickerDemo;
