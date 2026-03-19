import { useState, useEffect } from 'react'
import { useTranslation } from '../../../hooks/useTranslation'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      aria-label={t('common.scrollToTop')}
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  )
}
