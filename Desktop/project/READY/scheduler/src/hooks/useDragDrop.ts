import { useState } from 'react';
import { Task } from '../types';
import { getDateKey } from '../utils/dateUtils';

interface DraggedTask {
  task: Task;
  sourceDate: string;
}

export const useDragDrop = () => {
  const [draggedTask, setDraggedTask] = useState<DraggedTask | null>(null);
  const [dragOverDate, setDragOverDate] = useState<string | null>(null);

  const handleDragStart = (task: Task, sourceDate: string) => {
    setDraggedTask({ task, sourceDate });
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
    setDragOverDate(null);
  };

  const handleDragOver = (date: string) => {
    setDragOverDate(date);
  };

  const handleDragLeave = () => {
    setDragOverDate(null);
  };

  const handleDrop = (targetDate: string, onMoveTask: (task: Task, fromDate: string, toDate: string) => void) => {
    if (draggedTask && draggedTask.sourceDate !== targetDate) {
      onMoveTask(draggedTask.task, draggedTask.sourceDate, targetDate);
    }
    handleDragEnd();
  };

  return {
    draggedTask,
    dragOverDate,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop
  };
};
