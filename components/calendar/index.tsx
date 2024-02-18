// components/Calendar.tsx
import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';
import { useState } from 'react';
import CeldanrDay from './day';
import CaendarHeader from './header';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const buttonClass = 'border border-yellow-100 px-2 py-1 rounded-md bg-yellow-100 hover:bg-yellow-200';
  const renderHeader = () => (
    <div className="flex justify-between items-center p-4 border border-yellow-100">
      <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
      <div className="grid grid-cols-3 px-2 mx-2">
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
        <div className="col-span-1 px-2 py-2" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
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
          <CeldanrDay
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
        <div className="grid grid-cols-7 px-2 mx-2" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="flex flex-col">{rows}</div>;
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-200 border border-[red] left-20 right-0">
      {renderHeader()}
      <CaendarHeader />
      {renderDaysOfWeek()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
