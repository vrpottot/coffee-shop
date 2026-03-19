import { createContext, useContext, useState, useEffect, createElement, ReactNode } from 'react'

type Language = 'ru' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'ru'
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) {
      return savedLanguage
    }
    // Определяем язык браузера
    const browserLang = (typeof navigator !== 'undefined' ? (navigator.language || (navigator as any).userLanguage) : 'ru') || 'ru'
    return browserLang.startsWith('en') ? 'en' : 'ru'
  })

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.lang = language
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru')
  }

  return createElement(
    LanguageContext.Provider,
    { value: { language, toggleLanguage, setLanguage } },
    children
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
