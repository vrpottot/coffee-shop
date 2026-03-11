import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { monthNames, dayNames, getDateKey, getTasksForDate } from '../../utils/dateUtils';
import { Task, Tasks } from '../../types';
import { useDragDrop } from '../../hooks/useDragDrop';

interface CalendarProps {
  currentDate: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  tasks: Tasks;
  recurringTasks: Task[];
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onMoveTask: (task: Task, fromDate: string, toDate: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ 
  currentDate, 
  selectedDate, 
  setSelectedDate, 
  tasks, 
  recurringTasks,
  onPrevMonth,
  onNextMonth,
  onMoveTask
}) => {
  const { draggedTask, dragOverDate, handleDragStart, handleDragEnd, handleDragOver, handleDragLeave, handleDrop } = useDragDrop();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);

  let firstDayOfWeek = firstDay.getDay();
  firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;

  const prevDays = [];
  for (let i = firstDayOfWeek - 1; i > 0; i--) {
    prevDays.push(new Date(year, month - 1, prevLastDay.getDate() - i + 1));
  }

  const currentDays = [];
  for (let i = 1; i <= lastDay.getDate(); i++) {
    currentDays.push(new Date(year, month, i));
  }

  const nextDays = [];
  const totalCells = 42;
  const nextDaysNeeded = totalCells - (prevDays.length + currentDays.length);
  for (let i = 1; i <= nextDaysNeeded; i++) {
    nextDays.push(new Date(year, month + 1, i));
  }

  
  const renderDay = (date, isOtherMonth) => {
    const isToday = date.toDateString() === new Date().toDateString();
    const isSelected = date.toDateString() === selectedDate.toDateString();
    const dayTasks = getTasksForDate(date, tasks, recurringTasks);
    const pendingTasks = dayTasks.filter(t => !t.completed);
    const dateKey = getDateKey(date);

    const priorityWeight = { high: 3, medium: 2, low: 1 };
    const sorted = [...pendingTasks].sort((a, b) => priorityWeight[b.priority] - priorityWeight[a.priority]);
    const dotsCount = Math.min(sorted.length, 3);

    const isDragOver = dragOverDate === dateKey && !isOtherMonth;
    const canDrop = draggedTask && !isOtherMonth && draggedTask.sourceDate !== dateKey;

    return (
      <div 
        key={date.toISOString()}
        className={`day ${isOtherMonth ? 'other-month' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isDragOver ? 'drag-over' : ''} ${canDrop ? 'can-drop' : ''}`}
        onClick={() => setSelectedDate(date)}
        onDragOver={(e) => {
          e.preventDefault();
          if (!isOtherMonth) handleDragOver(dateKey);
        }}
        onDragLeave={handleDragLeave}
        onDrop={(e) => {
          e.preventDefault();
          handleDrop(dateKey, onMoveTask);
        }}
      >
        <span className="day-number">{date.getDate()}</span>
        {dotsCount > 0 && (
          <div className="task-dots">
            {Array.from({ length: dotsCount }).map((_, i) => (
              <div 
                key={i} 
                className={`task-dot p-${sorted[i].priority}`}
                draggable
                onDragStart={() => handleDragStart(sorted[i], dateKey)}
                onDragEnd={handleDragEnd}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="card calendar-card">
      <div className="card-header">
        <h2 className="card-title">
          <CalendarIcon />
          Календарь
        </h2>
        <div className="calendar-controls">
          <button className="icon-btn" onClick={onPrevMonth} title="Предыдущий месяц">
            <ChevronLeft size={16} />
          </button>
          <div className="month-year">{monthNames[month]} {year}</div>
          <button className="icon-btn" onClick={onNextMonth} title="Следующий месяц">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="calendar-wrapper">
        <div className="calendar">
          {dayNames.map(day => (
            <div key={day} className="day-name">{day.toLowerCase()}</div>
          ))}
          {prevDays.map(date => renderDay(date, true))}
          {currentDays.map(date => renderDay(date, false))}
          {nextDays.map(date => renderDay(date, true))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
