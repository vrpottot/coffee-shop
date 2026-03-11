import React from 'react';
import {
  CalendarDays,
  Plus,
  BarChart3,
  Download,
  CheckCircle2,
  Clock,
  Target,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  onNewTask: () => void;
  onShowStatistics: () => void;
  onShowExport: () => void;
  taskStats: { total: number; completed: number; pending: number };
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onNewTask, onShowStatistics, onShowExport, taskStats, isOpen, onToggle
}) => {
  const completionRate = taskStats.total > 0
    ? Math.round((taskStats.completed / taskStats.total) * 100)
    : 0;

  const quickActions = [
    { icon: Plus, label: 'Новая задача', onClick: onNewTask, color: 'var(--indigo)' },
    { icon: BarChart3, label: 'Статистика', onClick: onShowStatistics, color: 'var(--amber)' },
    { icon: Download, label: 'Экспорт', onClick: onShowExport, color: 'var(--green)' },
  ];

  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        title={isOpen ? 'Закрыть' : 'Открыть меню'}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <CalendarDays size={15} />
            </div>
            <span className="sidebar-logo-text">Scheduler<em>Pro</em></span>
          </div>
        </div>

        <div className="sidebar-section">
          <h4 className="sidebar-section-title">Обзор</h4>
          <div className="stats-mini">
            <div className="stat-item">
              <div className="stat-icon">
                <Target size={16} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{taskStats.total}</span>
                <span className="stat-label">Всего задач</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon completed">
                <CheckCircle2 size={16} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{taskStats.completed}</span>
                <span className="stat-label">Выполнено</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon pending">
                <Clock size={16} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{taskStats.pending}</span>
                <span className="stat-label">В ожидании</span>
              </div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-info">
              <span className="progress-label">Выполнение</span>
              <span className="progress-value">{completionRate}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${completionRate}%` }} />
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          <h4 className="sidebar-section-title">Быстрые действия</h4>
          <div className="quick-actions">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="quick-action-btn"
                onClick={action.onClick}
                style={{ '--action-color': action.color } as React.CSSProperties}
              >
                <action.icon size={16} />
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <h4 className="sidebar-section-title">Советы</h4>
          <div className="tips">
            <div className="tip">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <p>Перетаскивайте точки задач в календаре для изменения даты</p>
              </div>
            </div>
            <div className="tip">
              <div className="tip-icon">⌨️</div>
              <div className="tip-content">
                <p>Нажмите Enter в поле задачи для быстрого добавления</p>
              </div>
            </div>
            <div className="tip">
              <div className="tip-icon">📊</div>
              <div className="tip-content">
                <p>Следите за статистикой для повышения продуктивности</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
