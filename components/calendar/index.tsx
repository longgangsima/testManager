// components/Calendar.tsx
import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';
import { useState } from 'react';
import CalendarDay from './day';
import CalendarHeader from './header';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const isSidebarOpen = false;

  const buttonClass = 'border border-red-100 px-2 py-1 rounded-md bg-yellow-100 hover:bg-yellow-200';
  const renderHeader = () => (
    <div className="flex justify-between items-center p-4 border border-yellow-600">
      <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
      <div className="grid grid-cols-3 gap-2 mx-2">
        <button className={buttonClass} onClick={() => setCurrentMonth(addDays(currentMonth, -1))}>
          Prev
        </button>
        <button className={buttonClass} onClick={() => setCurrentMonth(new Date())}>
          Today
        </button>
        <button className={buttonClass} onClick={() => setCurrentMonth(addDays(currentMonth, 1))}>
          Next
        </button>
      </div>
    </div>
  );

  const renderDaysOfWeek = () => {
    const dateFormat = 'EEE';
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex py-2 border justify-center border-2 border-green-200" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 border border-2 border-blue-200">{days}</div>;
  };
  const onDateClick = (day: Date) => {
    console.log('Clicked date', day);
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    const selectedDate = new Date();

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <CalendarDay
            cloneDay={cloneDay}
            onDateClick={onDateClick}
            selectedDate={selectedDate}
            monthStart={monthStart}
            formattedDate={formattedDate}
          />
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 h-full" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="flex flex-col h-full">{rows}</div>;
  };

  return (
    <div>
      <CalendarHeader />
      <div className={`flex flex-col mt-16 ',${isSidebarOpen ? 'left-60' : 'left-32'})`}>
        {renderHeader()}
        {renderDaysOfWeek()}
        {renderCells()}
      </div>
    </div>
  );
};

export default Calendar;
