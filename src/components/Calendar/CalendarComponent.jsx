import React, { Component, Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
  renderMonthAndYear,
  renderCalendarDate,
  renderDayLabel
} from "./calendar";
export default function Calendar({ date, onDateChanged }) {
  const [dateState, setDateState] = useState({ current: 0, month: 0, year: 0 });
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    addDateToState(date);
  }, []);
  const addDateToState = (date) => {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();
    setDateState({
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear(),
    });
  };
  const getCalendarDates = () => {
    const { current, month, year } = dateState;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };
  return (
    <Styled.CalendarContainer>
      {renderMonthAndYear()}
      <Styled.CalendarGrid>
        <Fragment>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</Fragment>
        <Fragment>{getCalendarDates().map(renderCalendarDate)}</Fragment>
      </Styled.CalendarGrid>
    </Styled.CalendarContainer>
  );
}
Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func,
};