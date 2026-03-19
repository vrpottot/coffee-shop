import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// Игнорируем ошибки от расширений браузера
if (typeof window !== 'undefined') {
  const originalError = console.error
  console.error = (...args: any[]) => {
    const errorMessage = args[0]?.toString() || ''
    if (
      errorMessage.includes('runtime.lastError') ||
      errorMessage.includes('message channel closed') ||
      errorMessage.includes('asynchronous response') ||
      errorMessage.includes('willReadFrequently')
    ) {
      return // Игнорируем ошибки от расширений браузера и предупреждения canvas
    }
    originalError.apply(console, args)
  }

  // Обработка необработанных ошибок
  window.addEventListener('error', (event: ErrorEvent) => {
    const errorMessage = event.message || ''
    if (
      errorMessage.includes('runtime.lastError') ||
      errorMessage.includes('message channel closed') ||
      errorMessage.includes('asynchronous response')
    ) {
      event.preventDefault()
      return false
    }
  }, true)

  // Обработка необработанных промисов
  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    const errorMessage = event.reason?.message || event.reason?.toString() || ''
    if (
      errorMessage.includes('runtime.lastError') ||
      errorMessage.includes('message channel closed') ||
      errorMessage.includes('asynchronous response')
    ) {
      event.preventDefault()
      return false
    }
  }, true)
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
