import { Task, Tasks } from '../types';

export const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
export const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const getDateKey = (date: Date): string => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

export const isRecurringOnDate = (task: Task, date: Date): boolean => {
    const taskDate = new Date(task.startDate);
    if (date < taskDate) return false;

    if (task.repeat === 'daily') return true;
    if (task.repeat === 'weekly') return date.getDay() === taskDate.getDay();
    
    return false;
};

export const getTasksForDate = (date: Date, tasks: Tasks, recurringTasks: Task[]): Task[] => {
    const dateKey = getDateKey(date);
    const regularTasks = tasks[dateKey] || [];
    const recurringForToday = recurringTasks.filter(t => isRecurringOnDate(t, date));
    return [...regularTasks, ...recurringForToday];
};

export const PRIORITY_LABELS: Record<string, string> = { low: 'Низкий', medium: 'Средний', high: 'Высокий' };
