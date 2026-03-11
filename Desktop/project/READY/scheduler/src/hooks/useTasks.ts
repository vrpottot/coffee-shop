import { useState, useEffect } from 'react';
import { Task, Tasks, TaskFormData } from '../types';
import { getDateKey } from '../utils/dateUtils';
import { storageService } from '../services/storageService';
import { exportService } from '../services/exportService';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Tasks>({});
  const [recurringTasks, setRecurringTasks] = useState<Task[]>([]);

  // Load data on mount
  useEffect(() => {
    const loadedTasks = storageService.loadTasks();
    const loadedRecurring = storageService.loadRecurringTasks();
    
    setTasks(loadedTasks);
    setRecurringTasks(loadedRecurring);
  }, []);

  // Save data on change
  useEffect(() => {
    if (Object.keys(tasks).length > 0 || recurringTasks.length > 0) {
      storageService.saveTasks(tasks);
      storageService.saveRecurringTasks(recurringTasks);
    }
  }, [tasks, recurringTasks]);

  const addTask = (taskData: TaskFormData, selectedDate: Date) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      completed: false,
      startDate: selectedDate.toISOString(),
    };

    if (newTask.repeat !== 'none') {
      setRecurringTasks(prev => [...prev, newTask]);
    } else {
      const dateKey = getDateKey(selectedDate);
      setTasks(prev => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), newTask],
      }));
    }
  };

  const toggleTask = (id: string) => {
    const newTasks = { ...tasks };
    let found = false;

    Object.keys(newTasks).forEach(key => {
      newTasks[key] = newTasks[key].map(t => {
        if (t.id === id) {
          found = true;
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });

    if (found) {
      setTasks(newTasks);
      return;
    }

    setRecurringTasks(prev => prev.map(t => {
      if (t.id === id) return { ...t, completed: !t.completed };
      return t;
    }));
  };

  const deleteTask = (id: string) => {
    const newTasks = { ...tasks };
    Object.keys(newTasks).forEach(key => {
      newTasks[key] = newTasks[key].filter(t => t.id !== id);
      if (newTasks[key].length === 0) delete newTasks[key];
    });
    setTasks(newTasks);

    setRecurringTasks(prev => prev.filter(t => t.id !== id));
  };

  const moveTask = (task: Task, fromDate: string, toDate: string) => {
    // Remove task from source date
    const newTasks = { ...tasks };
    if (newTasks[fromDate]) {
      newTasks[fromDate] = newTasks[fromDate].filter(t => t.id !== task.id);
      if (newTasks[fromDate].length === 0) {
        delete newTasks[fromDate];
      }
    }

    // Add task to target date
    const movedTask = { ...task, startDate: new Date(toDate).toISOString() };
    newTasks[toDate] = [...(newTasks[toDate] || []), movedTask];

    setTasks(newTasks);
  };

  const exportTasks = () => {
    const data = storageService.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scheduler_export_${getDateKey(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    exportService.exportToCSV(tasks, recurringTasks);
  };

  const exportToICal = () => {
    exportService.exportToICal(tasks, recurringTasks);
  };

  const importFromCSV = async (file: File) => {
    try {
      const { tasks: importedTasks, recurringTasks: importedRecurring } = await exportService.importFromCSV(file);
      setTasks(importedTasks);
      setRecurringTasks(importedRecurring);
    } catch (error) {
      console.error('Error importing CSV:', error);
      throw error;
    }
  };

  return {
    tasks,
    recurringTasks,
    addTask,
    toggleTask,
    deleteTask,
    moveTask,
    exportTasks,
    exportToCSV,
    exportToICal,
    importFromCSV
  };
};
