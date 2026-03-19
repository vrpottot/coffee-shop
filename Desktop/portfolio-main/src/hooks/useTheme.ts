import { useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

const THEMES: Theme[] = ['dark', 'light']

interface UseThemeReturn {
  theme: Theme
  toggleTheme: () => void
  setTheme: (themeName: Theme) => void
  themes: Theme[]
}

export function useTheme(): UseThemeReturn {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme && THEMES.includes(savedTheme)) {
      return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    // Удаляем все классы тем
    root.classList.remove('light-theme', 'dark-theme')
    
    // Добавляем класс текущей темы
    if (theme !== 'dark') {
      root.classList.add(`${theme}-theme`)
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const setThemeByName = (themeName: Theme) => {
    if (THEMES.includes(themeName)) {
      setTheme(themeName)
    }
  }

  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme)
    const nextIndex = (currentIndex + 1) % THEMES.length
    setTheme(THEMES[nextIndex])
  }

  return { theme, toggleTheme, setTheme: setThemeByName, themes: THEMES }
}
