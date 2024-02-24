// create day cell component for calendar which contain day number in the top left
import { isSameMonth, isToday } from 'date-fns';

const CalendarDay = ({ cloneDay, onDateClick, selectedDate, monthStart, formattedDate }) => {
  const pillColor = isToday(cloneDay) ? 'bg-blue-100' : 'bg-gray-200';
  const pillStyle = `${pillColor}`;
  return (
    <div
      className={`flex flex-col border border-2 border-red-600  ${
        isSameMonth(cloneDay, monthStart) ? 'bg-white' : 'text-gray-400 bg-gray-50'
      } ${isToday(cloneDay) ? 'bg-blue-100' : ''}`}
      key={cloneDay.toString()}
      onClick={() => console.log('Clicked date', cloneDay)}
    >
      {/* Header of Day cell: day number + plus button */}
      <div className="flex justify-between px-2">
        {/*one is the date number display in the left side */}
        <div className="day_cell_header ">
          <span className="">{formattedDate}</span>
        </div>
        {/* the other is the right side contain the a plus button */}
        <button className="day_cell_plus btn btn-sm btn-primary">
          <i className="bi bi-plus"></i>
        </button>
      </div>
      {/* The body part of date cell display items: the max item number can be at most 8 */}
      {
        <div className="flex flex-col px-2">
          <div className={pillStyle}>
            <span>Item 1</span>
          </div>
          <div className={pillStyle}>
            <span>Item 2</span>
          </div>
          <div className={pillStyle}>
            <span>Item 3</span>
          </div>
          <div className={pillStyle}>
            <span>Item 4</span>
          </div>
          <div className={pillStyle}>
            <span>Item 5</span>
          </div>
          <div className={pillStyle}>
            <span>Item 6</span>
          </div>
          <div className={pillStyle}>
            <span>Item 7</span>
          </div>
          <div className={pillStyle}>
            <span>Item 8</span>
          </div>
        </div>
      }
    </div>
  );
};

export default CalendarDay;
