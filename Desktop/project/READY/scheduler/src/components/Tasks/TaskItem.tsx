import React from 'react';
import { Check, Repeat, Clock, Trash2 } from 'lucide-react';
import { PRIORITY_LABELS } from '../../utils/dateUtils';
import { Task } from '../../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const isRecurring = task.repeat && task.repeat !== 'none';

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`} data-priority={task.priority}>
      <div className="task-checkbox" onClick={() => onToggle(task.id)}>
        {task.completed && <Check size={11} color="white" strokeWidth={3} />}
      </div>

      <div className="task-content">
        <div className="task-header">
          <span className="task-title">{task.title}</span>
          <div className="task-badges">
            {isRecurring && (
              <Repeat size={12} style={{ color: 'var(--indigo)', opacity: 0.7 }} title={task.repeat} />
            )}
            <span className={`priority-badge p-${task.priority}`}>
              {PRIORITY_LABELS[task.priority]}
            </span>
          </div>
        </div>

        {task.time && (
          <div className="task-meta">
            <span>
              <Clock size={12} />
              {task.time}
            </span>
          </div>
        )}

        {task.description && (
          <div className="task-description">{task.description}</div>
        )}
      </div>

      <button className="delete-btn" onClick={() => onDelete(task.id)} title="Удалить">
        <Trash2 size={14} />
      </button>
    </div>
  );
};

export default TaskItem;
