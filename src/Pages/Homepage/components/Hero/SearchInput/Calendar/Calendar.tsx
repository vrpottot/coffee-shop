import { useState } from 'react';
import { MONTHS, WEEK_DAYS } from './calendar.constants';
import s from './styles.module.css';

interface CalendarProps {
  onDateSelect?: (dateString: string) => void;
}

export const Calendar = ({ onDateSelect }: CalendarProps) => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [startDay, setStartDay] = useState<number | null>(null);
  const [endDay, setEndDay] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const isHoveringRange = startDay !== null && !endDay && hoveredDay !== null;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startDayIndex = (firstDayOfMonth + 6) % 7;

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
    // Сбросим выбранные даты при смене месяца
    setStartDay(null);
    setEndDay(null);
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
    // Сбросим выбранные даты при смене месяца
    setStartDay(null);
    setEndDay(null);
  };

  const handleDayClick = (day: number) => {
    setHoveredDay(null);

    if (!startDay || (startDay && endDay)) {
      setStartDay(day);
      setEndDay(null);
    } else if (day >= startDay) {
      setEndDay(day);
      // Формируем строку даты и вызываем callback
      if (onDateSelect && startDay) {
        const startDate = `${String(startDay).padStart(2, '0')}.${String(month + 1).padStart(2, '0')}.${String(year).slice(-2)}`;
        const endDate = `${String(day).padStart(2, '0')}.${String(month + 1).padStart(2, '0')}.${String(year).slice(-2)}`;
        onDateSelect(`${startDate}-${endDate}`);
      }
    } else {
      setStartDay(day);
    }
  };
  const getRangePreviewSegments = () => {
    if (!isHoveringRange || !startDay || !hoveredDay || hoveredDay <= startDay) {
      return [];
    }

    const segments = [];
    const startPos = startDay + startDayIndex - 1;
    const endPos = hoveredDay + startDayIndex - 1;

    const startWeek = Math.floor(startPos / 7);
    const endWeek = Math.floor(endPos / 7);

    const dayWidth = 32;
    const gap = 2;

    for (let week = startWeek; week <= endWeek; week++) {
      const weekStart = week * 7;
      const weekEnd = weekStart + 6;

      const segmentStart = Math.max(startPos, weekStart);
      const segmentEnd = Math.min(endPos, weekEnd);

      if (segmentStart > segmentEnd) {
        continue;
      }

      const leftCol = segmentStart % 7;
      const rightCol = segmentEnd % 7;

      const left = leftCol * (dayWidth + gap);
      const width = (rightCol - leftCol) * (dayWidth + gap) + dayWidth - gap;
      const top = week * (dayWidth + gap);

      segments.push({
        left,
        width,
        top,
        key: `segment-${week}`,
      });
    }

    return segments;
  };

  const previewSegments = getRangePreviewSegments();

  return (
    <div className={s.calendar}>
      <div className={s.header}>
        <button onClick={handlePrevMonth} className={s.navButton}>
          &lt;
        </button>

        <div className={s.title}>
          {MONTHS[month]} {year}
        </div>

        <button onClick={handleNextMonth} className={s.navButton}>
          &gt;
        </button>
      </div>

      <div className={s.weekdays}>
        {WEEK_DAYS.map((day) => (
          <div key={day} className={s.weekday}>
            {day}
          </div>
        ))}
      </div>

      <div className={s.days} style={{ position: 'relative' }}>
        {Array.from({ length: startDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} className={s.emptyDay} />
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;

          const isStart = day === startDay;
          const isEnd = day === endDay;

          const isInRange = startDay !== null && endDay !== null && day > startDay && day < endDay;

          return (
            <div
              key={day}
              className={`${s.day}
                                ${isStart || isEnd ? s.selectedDay : ''}
                                ${isInRange ? s.rangeDay : ''}
                                ${isStart && endDay ? s.rangeStart : ''}
                                ${isEnd ? s.rangeEnd : ''}
                            `}
              onClick={() => handleDayClick(day)}
              onMouseEnter={() => setHoveredDay(day)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              {day}
            </div>
          );
        })}

        {previewSegments.map((segment) => (
          <div
            key={segment.key}
            className={s.rangePreview}
            style={{
              left: `${segment.left}px`,
              top: `${segment.top}px`,
              width: `${segment.width}px`,
              height: '30px',
            }}
          />
        ))}
      </div>
    </div>
  );
};
