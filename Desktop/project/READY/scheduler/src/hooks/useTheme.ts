import { useState, useEffect } from 'react';
import { Theme } from '../types';
import { storageService } from '../services/storageService';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = storageService.loadTheme();
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('light-theme');
    storageService.saveTheme(newTheme);
  };

  return { theme, toggleTheme };
};
