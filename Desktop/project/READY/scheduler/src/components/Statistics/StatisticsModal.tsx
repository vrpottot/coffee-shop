import React from 'react';
import { X, TrendingUp, CheckCircle, Clock, Target, BarChart3 } from 'lucide-react';
import { statisticsService } from '../../services/statisticsService';
import { Task, Tasks } from '../../types';

interface StatisticsModalProps {
  onClose: () => void;
  tasks: Tasks;
  recurringTasks: Task[];
}

const StatisticsModal: React.FC<StatisticsModalProps> = ({ onClose, tasks, recurringTasks }) => {
  const stats = statisticsService.calculateStatistics(tasks, recurringTasks);
  const monthlyTrend = statisticsService.getMonthlyTrend(stats.tasksByMonth);
  const weeklyTrend = statisticsService.getWeeklyTrend(stats.weeklyProgress);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getCompletionColor = (rate: number) => {
    if (rate >= 80) return '#10b981';
    if (rate >= 60) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content statistics-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            <BarChart3 size={20} />
            Статистика выполнения
          </h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          {/* Общая статистика */}
          <div className="stats-overview">
            <div className="stat-card">
              <div className="stat-icon">
                <Target size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-number">{stats.totalTasks}</div>
                <div className="stat-label">Всего задач</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon completed">
                <CheckCircle size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-number">{stats.completedTasks}</div>
                <div className="stat-label">Выполнено</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon pending">
                <Clock size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-number">{stats.pendingTasks}</div>
                <div className="stat-label">В ожидании</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ color: getCompletionColor(stats.completionRate) }}>
                <TrendingUp size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-number">{stats.completionRate}%</div>
                <div className="stat-label">Выполнение</div>
              </div>
            </div>
          </div>

          {/* Статистика по приоритетам */}
          <div className="priority-stats">
            <h4>Задачи по приоритетам</h4>
            <div className="priority-bars">
              {Object.entries(stats.tasksByPriority).map(([priority, data]) => (
                <div key={priority} className="priority-bar">
                  <div className="priority-info">
                    <span 
                      className="priority-label" 
                      style={{ backgroundColor: getPriorityColor(priority) }}
                    >
                      {priority === 'high' ? 'Высокий' : priority === 'medium' ? 'Средний' : 'Низкий'}
                    </span>
                    <span className="priority-count">{data.completed}/{data.total}</span>
                  </div>
                  <div className="priority-progress">
                    <div 
                      className="priority-progress-fill"
                      style={{ 
                        width: `${data.total > 0 ? (data.completed / data.total) * 100 : 0}%`,
                        backgroundColor: getPriorityColor(priority)
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Еженедельный прогресс */}
          <div className="weekly-stats">
            <h4>Прогресс за последние 4 недели</h4>
            <div className="weekly-bars">
              {weeklyTrend.map((week) => (
                <div key={week.week} className="week-bar">
                  <div className="week-info">
                    <span className="week-label">{week.week}</span>
                    <span className="week-count">{week.completed}/{week.total}</span>
                  </div>
                  <div className="week-progress">
                    <div 
                      className="week-progress-fill"
                      style={{ 
                        width: `${week.total > 0 ? (week.completed / week.total) * 100 : 0}%`,
                        backgroundColor: getCompletionColor(week.completionRate)
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Месячный тренд (если есть данные) */}
          {monthlyTrend.length > 0 && (
            <div className="monthly-stats">
              <h4>Месячная статистика</h4>
              <div className="monthly-bars">
                {monthlyTrend.slice(-6).map((month) => (
                  <div key={month.month} className="month-bar">
                    <div className="month-info">
                      <span className="month-label">
                        {new Date(month.month + '-01').toLocaleDateString('ru-RU', { month: 'short' })}
                      </span>
                      <span className="month-count">{month.completed}/{month.total}</span>
                    </div>
                    <div className="month-progress">
                      <div 
                        className="month-progress-fill"
                        style={{ 
                          width: `${month.total > 0 ? (month.completed / month.total) * 100 : 0}%`,
                          backgroundColor: getCompletionColor(month.completionRate)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsModal;
