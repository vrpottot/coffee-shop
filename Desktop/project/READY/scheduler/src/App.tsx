import React, { useState, useMemo } from 'react';
import Header from './components/Layout/Header';
import Calendar from './components/Calendar/Calendar';
import TaskForm from './components/Tasks/TaskForm';
import TaskList from './components/Tasks/TaskList';
import ExportModal from './components/Export/ExportModal';
import StatisticsModal from './components/Statistics/StatisticsModal';
import Sidebar from './components/Sidebar/Sidebar';
import { getTasksForDate } from './utils/dateUtils';
import { BarChart3, Download, ListTodo } from 'lucide-react';
import { useTasks } from './hooks/useTasks';
import { useTheme } from './hooks/useTheme';
import { useDates } from './hooks/useDates';
import './App.css';

function App() {
  const { tasks, recurringTasks, addTask, toggleTask, deleteTask, moveTask, exportTasks, exportToCSV, exportToICal, importFromCSV } = useTasks();
  const { theme, toggleTheme } = useTheme();
  const { currentDate, selectedDate, setCurrentDate, setSelectedDate, goToPrevMonth, goToNextMonth } = useDates();
  const [showExportModal, setShowExportModal] = useState(false);
  const [showStatisticsModal, setShowStatisticsModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const taskFormRef = React.useRef<HTMLDivElement>(null);

  const taskStats = useMemo(() => {
    const allTasks: any[] = [];
    Object.values(tasks).forEach(dateTasks => allTasks.push(...dateTasks));
    allTasks.push(...recurringTasks);
    const total = allTasks.length;
    const completed = allTasks.filter(t => t.completed).length;
    return { total, completed, pending: total - completed };
  }, [tasks, recurringTasks]);

  const handleNewTask = () => {
    setIsSidebarOpen(false);
    taskFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const input = taskFormRef.current?.querySelector('input[type="text"]') as HTMLInputElement;
      input?.focus();
    }, 300);
  };

  const handleAddTask = (taskData) => addTask(taskData, selectedDate);
  const handleToggleTask = (id) => toggleTask(id);
  const handleDeleteTask = (id) => {
    if (!window.confirm('Удалить эту задачу?')) return;
    deleteTask(id);
  };
  const handleImportCSV = async (file: File) => await importFromCSV(file);

  const tasksForSelectedDate = getTasksForDate(selectedDate, tasks, recurringTasks);
  const dateStr = selectedDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
  const weekday = selectedDate.toLocaleDateString('ru-RU', { weekday: 'long' });

  return (
    <>
      <div className="bg-blur" />

      <Sidebar
        onNewTask={handleNewTask}
        onShowStatistics={() => { setShowStatisticsModal(true); setIsSidebarOpen(false); }}
        onShowExport={() => { setShowExportModal(true); setIsSidebarOpen(false); }}
        taskStats={taskStats}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      <main className="container">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <div className="content-grid">
          <Calendar
            currentDate={currentDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            tasks={tasks}
            recurringTasks={recurringTasks}
            onPrevMonth={goToPrevMonth}
            onNextMonth={goToNextMonth}
            onMoveTask={moveTask}
          />

          <section className="card tasks-card">
            <div className="card-header">
              <div>
                <div className="tasks-card-title">
                  {dateStr}
                </div>
                <div className="tasks-card-subtitle">
                  {weekday.charAt(0).toUpperCase() + weekday.slice(1)} · {tasksForSelectedDate.length === 0 ? 'Нет задач' : `${tasksForSelectedDate.filter(t => t.completed).length} из ${tasksForSelectedDate.length} выполнено`}
                </div>
              </div>
              <div className="task-actions">
                <button className="icon-btn" onClick={() => setShowStatisticsModal(true)} title="Статистика">
                  <BarChart3 size={15} />
                </button>
                <button className="icon-btn" onClick={() => setShowExportModal(true)} title="Экспорт">
                  <Download size={15} />
                </button>
              </div>
            </div>

            <div ref={taskFormRef}>
              <TaskForm onAddTask={handleAddTask} />
            </div>

            <TaskList
              tasks={tasksForSelectedDate}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          </section>
        </div>
      </main>

      {showExportModal && (
        <ExportModal
          onClose={() => setShowExportModal(false)}
          onExportJSON={exportTasks}
          onExportCSV={exportToCSV}
          onExportICal={exportToICal}
          onImportCSV={handleImportCSV}
        />
      )}

      {showStatisticsModal && (
        <StatisticsModal
          onClose={() => setShowStatisticsModal(false)}
          tasks={tasks}
          recurringTasks={recurringTasks}
        />
      )}
    </>
  );
}

export default App;
