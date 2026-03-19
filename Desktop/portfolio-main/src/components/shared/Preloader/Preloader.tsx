import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 5
      })
    }, 150)

    const handleLoad = () => {
      setTimeout(() => {
        setProgress(100)
        setTimeout(() => setIsLoaded(true), 800)
        setTimeout(() => setShouldRender(false), 2000)
      }, 1500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div className={`preloader ${isLoaded ? 'preloader-hidden' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-title">
          <span className="char">v</span>
          <span className="char">r</span>
          <span className="char">p</span>
          <span className="char">o</span>
          <span className="char">t</span>
          <span className="char">t</span>
          <span className="char">o</span>
          <span className="char">t</span>
        </div>
        <div className="preloader-bar-container">
          <div 
            className="preloader-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="preloader-percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
