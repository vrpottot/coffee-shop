import React from 'react';
import { CalendarDays, Sun, Moon } from 'lucide-react';
import { Theme } from '../../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">
            <CalendarDays size={18} />
          </div>
          <h1>Scheduler<em>Pro</em></h1>
        </div>
        <span className="header-subtitle">Ваш персональный планировщик задач</span>
      </div>

      <div className="header-actions">
        <button
          onClick={toggleTheme}
          className="theme-btn"
          title="Переключить тему"
        >
          {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
