import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { useTranslation } from '../../../hooks/useTranslation'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTypingEffect } from '../../../hooks/useTypingEffect'
import Magnetic from '../../shared/Magnetic/Magnetic'
import './Hero.css'

export default function Hero() {
  const sectionRef = useScrollAnimation({ threshold: 0.3, animationClass: 'blur-fade' })
  const { t } = useTranslation()
  const { language } = useLanguage()
  const yearsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const completionRef = useRef<HTMLDivElement>(null)
  const [projectCount, setProjectCount] = useState<number | null>(null)
  
  const typingTexts = language === 'ru' 
    ? [
        t('hero.description'),
        t('hero.specialization'),
        'Создаю красивые пользовательские интерфейсы',
        'Разрабатываю современные веб-приложения'
      ]
    : [
        t('hero.description'),
        t('hero.specialization'),
        'Creating beautiful user experiences',
        'Building modern web applications'
      ]
  const typedText = useTypingEffect(typingTexts, 80, 40, 2000)

  useEffect(() => {
    fetch('/assets/data/portfolio.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.projects) {
          setProjectCount(data.projects.length)
        } else {
          setProjectCount(9) // Fallback
        }
      })
      .catch(() => {
        setProjectCount(9) // Fallback
      })
  }, [])

  useEffect(() => {
    if (projectCount === null) return

    const animateCounter = (element: HTMLElement | null, target: number, suffix: string) => {
      if (!element || element.dataset.animated) return
      
      const duration = 1500
      const start = 0
      const increment = target / (duration / 16)
      let current = start
      
      element.classList.add('counter-animate')
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          element.textContent = target % 1 === 0 ? target + suffix : target.toFixed(1) + suffix
          clearInterval(timer)
          element.dataset.animated = 'true'
        } else {
          const value = current % 1 === 0 ? current : current.toFixed(1)
          element.textContent = value + suffix
        }
      }, 16)
    }

    const observerOptions = { threshold: 0.5 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero-years') animateCounter(entry.target as HTMLElement, 1.5, '+')
          if (entry.target.id === 'hero-projects') animateCounter(entry.target as HTMLElement, projectCount, '+')
          if (entry.target.id === 'hero-completion') animateCounter(entry.target as HTMLElement, 100, '')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (yearsRef.current) observer.observe(yearsRef.current)
    if (projectsRef.current) observer.observe(projectsRef.current)
    if (completionRef.current) observer.observe(completionRef.current)

    return () => observer.disconnect()
  }, [projectCount])

  useEffect(() => {
    // Parallax effect для blob элементов
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const blobs = document.querySelectorAll('.aurora-blob')
      
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.3
        const yPos = -(scrolled * speed)
        ;(blob as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="main" ref={sectionRef} className="hero-section" role="region" aria-label={t('hero.title')}>
      <div className="hero-blobs">
        <div className="aurora-blob blob-1" aria-hidden="true"></div>
        <div className="aurora-blob blob-2" aria-hidden="true"></div>
        <div className="aurora-blob blob-3" aria-hidden="true"></div>
      </div>

      <div className="hero-content">
        <div className="hero-status">
          <span className="hero-status-dot">
            <span className="hero-status-ping"></span>
            <span className="hero-status-core"></span>
          </span>
          <span className="hero-status-text">{t('hero.status')}</span>
        </div>

        <h1 className="hero-title">
          {t('hero.title')}<br />
          <span className="hero-title-gradient">{t('hero.titleSuffix')}</span>
        </h1>

        <p className="hero-description">
          <span className="hero-typing-text">{typedText}</span>
          <span className="hero-typing-cursor">|</span>
        </p>

        <div className="hero-stats">
          <div className="hero-stat-card">
            <div className="hero-stat-value" id="hero-years" ref={yearsRef}>2+</div>
            <div className="hero-stat-label">{t('about.stats.experience')}</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-value" id="hero-projects" ref={projectsRef}>12</div>
            <div className="hero-stat-label">{t('about.stats.projects')}</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-value" id="hero-completion" ref={completionRef}>100</div>
            <div className="hero-stat-label">{t('about.stats.completed')}</div>
          </div>
        </div>

        <div className="hero-actions">
          <Magnetic strength={0.2}>
            <a 
              href="#projects" 
              className="hero-btn-primary"
            >
              <span>
                {t('hero.viewWorks')}
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </span>
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a 
              href="/assets/docs/Frontend_Developer_Resume (4).pdf" 
              download="Frontend_Developer_Resume.pdf" 
              className="hero-btn-secondary"
            >
              <i className="fas fa-download" aria-hidden="true"></i>
              {t('hero.downloadResume')}
            </a>
          </Magnetic>
        </div>

        <div className="hero-social">
          <Magnetic strength={0.3}>
            <a href="https://github.com/vrpottot" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a href="https://t.me/tuttuto0" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <i className="fab fa-telegram" aria-hidden="true"></i>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
