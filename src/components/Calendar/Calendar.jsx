export const THIS_YEAR = +(new Date().getFullYear());
// (int) The current month starting from 1 - 12
// 1 => January, 12 => December
export const THIS_MONTH = +(new Date().getMonth()) + 1;
// Week days names and shortnames
export const WEEK_DAYS = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat"
}
// Calendar months names and short names
export const CALENDAR_MONTHS = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec"
}
// Weeks displayed on calendar
export const CALENDAR_WEEKS = 6;
// Pads a string value with leading zeroes(0) until length is reached
// For example: zeroPad(5, 2) => "05"
export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0');
}
// (int) Number days in a month for a given year from 28 - 31
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
      ? 30
      : 31;
}
// (int) First day of the month for a given year from 1 - 7
// 1 => Sunday, 7 => Saturday
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1;
}
export const isDate = date =&gt; 
{
    const isDate = Object.prototype.toString.call(date) === '[object Date]';
    const isValidDate = date && !Number.isNaN(date.valueOf());
  
    return isDate && isValidDate;
  }
  // (bool) Checks if two date values are of the same month and year
  export const isSameMonth = (date, basedate = new Date()) => {
    if (!(isDate(date) && isDate(basedate))) return false;
    const basedateMonth = +(basedate.getMonth()) + 1;
    const basedateYear = basedate.getFullYear();
    const dateMonth = +(date.getMonth()) + 1;
    const dateYear = date.getFullYear();
    return (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
  
  }
  // (bool) Checks if two date values are the same day
  export const isSameDay = (date, basedate = new Date()) => {
  
    if (!(isDate(date) && isDate(basedate))) return false;
    const basedateDate = basedate.getDate();
    const basedateMonth = +(basedate.getMonth()) + 1;
    const basedateYear = basedate.getFullYear();
    const dateDate = date.getDate();
    const dateMonth = +(date.getMonth()) + 1;
    const dateYear = date.getFullYear();
    return (+basedateDate === +dateDate) && (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
  
  }
  // (string) Formats the given date as YYYY-MM-DD
  // Months and Days are zero padded
  export const getDateISO = (date = new Date) => {
  
    if (!isDate(date)) return null;
    return [
      date.getFullYear(),
      zeroPad(+date.getMonth() + 1, 2),
      zeroPad(+date.getDate(), 2)
    ].join('-');
  
  }
  // ({month, year}) Gets the month and year before the given month and year
  // For example: getPreviousMonth(1, 2000) => {month: 12, year: 1999}
  // while: getPreviousMonth(12, 2000) => {month: 11, year: 2000}
  export const getPreviousMonth = (month, year) => {
    const prevMonth = (month > 1) ? month - 1 : 12;
    const prevMonthYear = (month > 1) ? year : year - 1;
    return { month: prevMonth, year: prevMonthYear };
  }
  // ({month, year}) Gets the month and year after the given month and year
  // For example: getNextMonth(1, 2000) => {month: 2, year: 2000}
  // while: getNextMonth(12, 2000) => {month: 1, year: 2001}
  export const getNextMonth = (month, year) => {
    const nextMonth = (month < 12) ? month + 1 : 1;
    const nextMonthYear = (month < 12) ? year : year + 1;
    return { month: nextMonth, year: nextMonthYear };
  }
  export default (month = THIS_MONTH, year = THIS_YEAR) => {

    // Get number of days in the month and the month's first day
  
    const monthDays = getMonthDays(month, year);
    const monthFirstDay = getMonthFirstDay(month, year);
    // Get number of days to be displayed from previous and next months
    // These ensure a total of 42 days (6 weeks) displayed on the calendar
  
    const daysFromPrevMonth = monthFirstDay - 1;
    const daysFromNextMonth = (CALENDAR_WEEKS * 7) - (daysFromPrevMonth + monthDays);
    // Get the previous and next months and years
  
    const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(month, year);
    const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);
    // Get number of days in previous month
    const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);
    // Builds dates to be displayed from previous month
  
    const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
      const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
      return [ prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2) ];
    });
    // Builds dates to be displayed from current month
  
    const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
      const day = index + 1;
      return [year, zeroPad(month, 2), zeroPad(day, 2)];
    });
    // Builds dates to be displayed from next month
  
    const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
      const day = index + 1;
      return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
    });
    // Combines all dates from previous, current and next months
    return [ ...prevMonthDates, ...thisMonthDates, ...nextMonthDates ];
  
  }
  let pressureTimer, pressureTimeout; 

const renderMonthAndYear = () => {
    const { month, year } = dateState;
    // Resolve the month name from the CALENDAR_MONTHS object map
    const monthname =
      Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))];
    return (
      <Styled.CalendarHeader>
        <Styled.ArrowLeft
          onMouseDown={handlePrevious}
          onMouseUp={clearPressureTimer}
          title="Previous Month"
        />
        <Styled.CalendarMonth>
          {monthname} {year}
        </Styled.CalendarMonth>
        <Styled.ArrowRight
          onMouseDown={handleNext}
          onMouseUp={clearPressureTimer}
          title="Next Month"
        />
      </Styled.CalendarHeader>
    );
  };
  // Render the label for day of the week
  // This method is used as a map callback as seen in render()
  const renderDayLabel = (day, index) => {
    // Resolve the day of the week label from the WEEK_DAYS object map
    const daylabel = WEEK_DAYS[day].toUpperCase();
    return (
      <Styled.CalendarDay key={daylabel} index={index}>
        {daylabel}
      </Styled.CalendarDay>
    );
  };
  // Render a calendar date as returned from the calendar builder function
  // This method is used as a map callback as seen in render()
  const renderCalendarDate = (date, index) => {
    const { current, month, year } = dateState;
    const _date = new Date(date.join("-"));
    // Check if calendar date is same day as today
    const isToday = isSameDay(_date, today);
    // Check if calendar date is same day as currently selected date
    const isCurrent = current && isSameDay(_date, current);
    // Check if calendar date is in the same month as the state month and year
    const inMonth =
      month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));
    // The click handler
    const onClick = this.gotoDate(_date);
    const props = { index, inMonth, onClick, title: _date.toDateString() };
    // Conditionally render a styled date component
    const DateComponent = isCurrent
      ? Styled.HighlightedCalendarDate
      : isToday
      ? Styled.TodayCalendarDate
      : Styled.CalendarDate;
    return (
      <DateComponent key={getDateISO(_date)} {...props}>
        {_date.getDate()}
      </DateComponent>
    );
  };