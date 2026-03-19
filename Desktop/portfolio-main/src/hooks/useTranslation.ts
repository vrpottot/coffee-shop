import { useState, useEffect } from 'react'
import { useLanguage } from './useLanguage'

type Language = 'ru' | 'en'
type Translations = Record<string, any> | null

// Кэш для переводов
const translationsCache: Record<Language, Translations> = {
  ru: null,
  en: null
}

// Промисы загрузки для предотвращения дублирования запросов
const loadingPromises: Record<Language, Promise<Translations> | null> = {
  ru: null,
  en: null
}

async function loadTranslations(lang: Language): Promise<Translations> {
  // Если уже загружены, возвращаем из кэша
  if (translationsCache[lang]) {
    return translationsCache[lang]
  }

  // Если уже загружается, ждем существующий промис
  if (loadingPromises[lang]) {
    return loadingPromises[lang]!
  }

  // Начинаем загрузку
  loadingPromises[lang] = fetch(`/locales/${lang}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${lang}.json`)
      }
      return response.json()
    })
    .then(data => {
      translationsCache[lang] = data
      loadingPromises[lang] = null
      return data
    })
    .catch(error => {
      loadingPromises[lang] = null
      console.error(`Error loading translations for ${lang}:`, error)
      return {}
    })

  return loadingPromises[lang]!
}

interface UseTranslationReturn {
  t: (path: string) => string
  language: Language
  isLoading: boolean
}

export function useTranslation(): UseTranslationReturn {
  const { language } = useLanguage()
  const [translations, setTranslations] = useState<Record<Language, Translations>>({
    ru: translationsCache.ru,
    en: translationsCache.en
  })
  const [isLoading, setIsLoading] = useState<boolean>(!translationsCache[language])

  useEffect(() => {
    // Загружаем переводы для текущего языка, если еще не загружены
    if (!translationsCache[language]) {
      setIsLoading(true)
      loadTranslations(language).then(data => {
        setTranslations(prev => ({
          ...prev,
          [language]: data
        }))
        setIsLoading(false)
      })
    }

    // Предзагружаем другой язык для быстрого переключения
    const otherLang: Language = language === 'ru' ? 'en' : 'ru'
    if (!translationsCache[otherLang]) {
      loadTranslations(otherLang)
    }
  }, [language])

  const t = (path: string): string => {
    const keys = path.split('.')
    let value: any = translations[language] || translationsCache[language]
    
    // Если переводы еще не загружены, возвращаем путь
    if (!value) {
      return path
    }
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        // Fallback to Russian if translation not found
        const fallbackTranslations = translations.ru || translationsCache.ru || {}
        value = fallbackTranslations
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return path // Return path if translation not found
          }
        }
        break
      }
    }
    
    return typeof value === 'string' ? value : path
  }

  return { t, language, isLoading }
}
