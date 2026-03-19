import { useState, useEffect } from 'react'
import './ReadingProgress.css'

export default function ReadingProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / scrollableHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', calculateScrollProgress, { passive: true })
    calculateScrollProgress() // Initial calculation

    return () => window.removeEventListener('scroll', calculateScrollProgress)
  }, [])

  return (
    <div className="reading-progress-container">
      <div 
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </div>
  )
}
