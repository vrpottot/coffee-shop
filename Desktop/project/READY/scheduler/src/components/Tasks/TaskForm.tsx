import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { TaskFormData } from '../../types';

interface TaskFormProps {
  onAddTask: (taskData: TaskFormData) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [repeat, setRepeat] = useState<'none' | 'daily' | 'weekly'>('none');
  const [description, setDescription] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!title.trim()) return;
    onAddTask({ title: title.trim(), time, priority, repeat, description: description.trim() });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-task-form">
      <div className="input-row">
        <div className="input-group main-input">
          <input
            type="text"
            placeholder="Название задачи..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
        </div>
        <div className="input-group time-input">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row-selects">
        <div className="input-group">
          <select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
            <option value="low">Низкий приоритет</option>
            <option value="medium">Средний приоритет</option>
            <option value="high">Высокий приоритет</option>
          </select>
        </div>
        <div className="input-group">
          <select value={repeat} onChange={(e) => setRepeat(e.target.value as any)}>
            <option value="none">Без повтора</option>
            <option value="daily">Ежедневно</option>
            <option value="weekly">Еженедельно</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <textarea
          placeholder="Описание (необязательно)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={handleSubmit}>
        <Plus size={16} />
        Добавить задачу
      </button>
    </div>
  );
};

export default TaskForm;
