import { Task, Tasks, Theme } from '../types';

const STORAGE_KEYS = {
  TASKS: 'scheduler_tasks',
  RECURRING_TASKS: 'scheduler_recurring',
  THEME: 'scheduler_theme'
} as const;

export const storageService = {
  saveTasks: (tasks: Tasks): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  },

  loadTasks: (): Tasks => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TASKS);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error loading tasks:', error);
      return {};
    }
  },

  saveRecurringTasks: (recurringTasks: Task[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.RECURRING_TASKS, JSON.stringify(recurringTasks));
    } catch (error) {
      console.error('Error saving recurring tasks:', error);
    }
  },

  loadRecurringTasks: (): Task[] => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECURRING_TASKS);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading recurring tasks:', error);
      return [];
    }
  },

  saveTheme: (theme: Theme): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  },

  loadTheme: (): Theme | null => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      return saved as Theme || null;
    } catch (error) {
      console.error('Error loading theme:', error);
      return null;
    }
  },

  exportData: (): { tasks: Tasks; recurringTasks: Task[] } => {
    return {
      tasks: storageService.loadTasks(),
      recurringTasks: storageService.loadRecurringTasks()
    };
  }
};
