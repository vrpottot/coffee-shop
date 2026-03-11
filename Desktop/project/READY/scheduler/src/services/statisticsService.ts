import { Task, Tasks } from '../types';

interface Statistics {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  completionRate: number;
  tasksByPriority: {
    high: { total: number; completed: number };
    medium: { total: number; completed: number };
    low: { total: number; completed: number };
  };
  tasksByMonth: { [month: string]: { total: number; completed: number } };
  weeklyProgress: { [week: string]: { total: number; completed: number } };
}

export const statisticsService = {
  calculateStatistics: (tasks: Tasks, recurringTasks: Task[]): Statistics => {
    const allTasks: Task[] = [];
    
    // Add regular tasks
    Object.values(tasks).forEach(dateTasks => {
      allTasks.push(...dateTasks);
    });
    
    // Add recurring tasks
    allTasks.push(...recurringTasks);

    const totalTasks = allTasks.length;
    const completedTasks = allTasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Tasks by priority
    const tasksByPriority = {
      high: { total: 0, completed: 0 },
      medium: { total: 0, completed: 0 },
      low: { total: 0, completed: 0 }
    };

    // Tasks by month
    const tasksByMonth: { [month: string]: { total: number; completed: number } } = {};
    
    // Weekly progress (last 4 weeks)
    const weeklyProgress: { [week: string]: { total: number; completed: number } } = {};

    allTasks.forEach(task => {
      // Priority statistics
      tasksByPriority[task.priority].total++;
      if (task.completed) {
        tasksByPriority[task.priority].completed++;
      }

      // Monthly statistics
      const taskDate = new Date(task.startDate);
      const monthKey = `${taskDate.getFullYear()}-${String(taskDate.getMonth() + 1).padStart(2, '0')}`;
      
      if (!tasksByMonth[monthKey]) {
        tasksByMonth[monthKey] = { total: 0, completed: 0 };
      }
      tasksByMonth[monthKey].total++;
      if (task.completed) {
        tasksByMonth[monthKey].completed++;
      }

      // Weekly statistics (last 4 weeks)
      const now = new Date();
      const weeksDiff = Math.floor((now.getTime() - taskDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
      
      if (weeksDiff >= 0 && weeksDiff < 4) {
        const weekKey = `Неделя ${4 - weeksDiff}`;
        if (!weeklyProgress[weekKey]) {
          weeklyProgress[weekKey] = { total: 0, completed: 0 };
        }
        weeklyProgress[weekKey].total++;
        if (task.completed) {
          weeklyProgress[weekKey].completed++;
        }
      }
    });

    return {
      totalTasks,
      completedTasks,
      pendingTasks,
      completionRate,
      tasksByPriority,
      tasksByMonth,
      weeklyProgress
    };
  },

  getMonthlyTrend: (tasksByMonth: { [month: string]: { total: number; completed: number } }) => {
    const months = Object.keys(tasksByMonth).sort();
    return months.map(month => ({
      month,
      ...tasksByMonth[month],
      completionRate: tasksByMonth[month].total > 0 
        ? Math.round((tasksByMonth[month].completed / tasksByMonth[month].total) * 100)
        : 0
    }));
  },

  getWeeklyTrend: (weeklyProgress: { [week: string]: { total: number; completed: number } }) => {
    const weeks = ['Неделя 4', 'Неделя 3', 'Неделя 2', 'Неделя 1'];
    return weeks.map(week => ({
      week,
      ...weeklyProgress[week] || { total: 0, completed: 0 },
      completionRate: weeklyProgress[week]?.total > 0 
        ? Math.round((weeklyProgress[week].completed / weeklyProgress[week].total) * 100)
        : 0
    }));
  }
};
