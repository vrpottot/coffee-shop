import React from 'react';
import { CalendarX } from 'lucide-react';
import TaskItem from './TaskItem';
import { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    if (!a.time) return 1;
    if (!b.time) return -1;
    return a.time.localeCompare(b.time);
  });

  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        <div className="no-tasks">
          <div className="no-tasks-icon">
            <CalendarX size={22} />
          </div>
          <p>Задач на этот день нет</p>
          <span>Добавьте первую задачу выше</span>
        </div>
      ) : (
        <div className="tasks-list">
          {sortedTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
