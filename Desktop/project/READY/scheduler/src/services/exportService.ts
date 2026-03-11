import { Task, Tasks } from '../types';
import { getDateKey } from '../utils/dateUtils';

export const exportService = {
  // CSV Export
  exportToCSV: (tasks: Tasks, recurringTasks: Task[]): void => {
    const allTasks: (Task & { date: string })[] = [];
    
    // Add regular tasks
    Object.entries(tasks).forEach(([date, dateTasks]) => {
      dateTasks.forEach(task => {
        allTasks.push({ ...task, date });
      });
    });
    
    // Add recurring tasks
    recurringTasks.forEach(task => {
      allTasks.push({ ...task, date: 'Recurring' });
    });

    const csvContent = [
      ['Title', 'Description', 'Date', 'Time', 'Priority', 'Repeat', 'Completed'],
      ...allTasks.map(task => [
        task.title,
        task.description || '',
        task.date,
        task.time || '',
        task.priority,
        task.repeat,
        task.completed ? 'Yes' : 'No'
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scheduler_export_${getDateKey(new Date())}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  },

  // iCal Export
  exportToICal: (tasks: Tasks, recurringTasks: Task[]): void => {
    const events: string[] = [];
    
    // Add regular tasks
    Object.entries(tasks).forEach(([date, dateTasks]) => {
      dateTasks.forEach(task => {
        if (!task.completed) {
          events.push(createICalEvent(task, date));
        }
      });
    });
    
    // Add recurring tasks
    recurringTasks.forEach(task => {
      if (!task.completed) {
        let event = createICalEvent(task, task.startDate);
        if (task.repeat === 'daily') {
          event += 'RRULE:FREQ=DAILY\n';
        } else if (task.repeat === 'weekly') {
          event += 'RRULE:FREQ=WEEKLY\n';
        }
        events.push(event);
      }
    });

    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Scheduler//Scheduler//EN
${events.join('\n')}END:VCALENDAR`;

    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scheduler_export_${getDateKey(new Date())}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  },

  // Import from CSV
  importFromCSV: (file: File): Promise<{ tasks: Tasks; recurringTasks: Task[] }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          const lines = text.split('\n');
          const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
          
          const tasks: Tasks = {};
          const recurringTasks: Task[] = [];
          
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            
            const values = line.split(',').map(v => v.replace(/"/g, '').trim());
            const taskData: any = {};
            
            headers.forEach((header, index) => {
              taskData[header.toLowerCase()] = values[index] || '';
            });
            
            const task: Task = {
              id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
              title: taskData.title || '',
              description: taskData.description || '',
              time: taskData.time || undefined,
              priority: (taskData.priority || 'medium').toLowerCase() as 'low' | 'medium' | 'high',
              repeat: (taskData.repeat || 'none').toLowerCase() as 'none' | 'daily' | 'weekly',
              completed: taskData.completed === 'Yes',
              startDate: taskData.date === 'Recurring' ? new Date().toISOString() : new Date(taskData.date).toISOString()
            };
            
            if (task.repeat !== 'none') {
              recurringTasks.push(task);
            } else if (taskData.date !== 'Recurring') {
              const dateKey = taskData.date;
              if (!tasks[dateKey]) tasks[dateKey] = [];
              tasks[dateKey].push(task);
            }
          }
          
          resolve({ tasks, recurringTasks });
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  }
};

function createICalEvent(task: Task, date: string): string {
  const startDate = new Date(date);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 1);
  
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };
  
  return `BEGIN:VEVENT
UID:${task.id}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${task.title}
${task.description ? `DESCRIPTION:${task.description}\n` : ''}
PRIORITY:${task.priority === 'high' ? '1' : task.priority === 'medium' ? '5' : '9'}
STATUS:${task.completed ? 'COMPLETED' : 'CONFIRMED'}
END:VEVENT
`;
}
