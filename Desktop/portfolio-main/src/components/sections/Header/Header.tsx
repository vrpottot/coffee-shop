import { useState } from 'react'
import { useTheme } from '../../../hooks/useTheme'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTranslation } from '../../../hooks/useTranslation'
import './Header.css'

type Theme = 'dark' | 'light'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const { t } = useTranslation()

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const getThemeIcon = (themeName: Theme | string): string => {
    switch (themeName) {
      case 'dark': return 'fa-moon'
      case 'light': return 'fa-sun'
      default: return 'fa-palette'
    }
  }


  return (
    <nav className="header-nav" role="navigation" aria-label={t('common.mainNavigation')}>
      <div className="header-container">
        <div className="header-content">
          <a href="#main" className="header-logo">
            <div className="header-logo-dot"></div>
            <span>PORTFOLIO</span>
          </a>
          <div className="header-links">
            <a href="#about" className="header-link">{t('nav.about')}</a>
            <a href="#projects" className="header-link">{t('nav.projects')}</a>
            <a href="#skills" className="header-link">{t('nav.skills')}</a>
          </div>
          <div className="header-actions">
            <a href="/assets/docs/Frontend_Developer_Resume (4).pdf" download="Frontend_Developer_Resume.pdf" className="header-resume">
              <i className="fas fa-download" aria-hidden="true"></i>
              {t('nav.resume')}
            </a>
            <a href="#contact" className="header-contact">{t('nav.contact')}</a>
            <div className="header-controls">
            <button
              onClick={toggleLanguage}
              className="header-language-toggle"
              aria-label={language === 'ru' ? t('common.switchToEnglish') : t('common.switchToRussian')}
              title={language === 'ru' ? 'EN' : 'RU'}
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>
            <button
              onClick={toggleTheme}
              className="header-theme-toggle"
              aria-label={theme === 'dark' ? t('theme.toggleLight') : t('theme.toggleDark')}
            >
              <i className={`fas ${getThemeIcon(theme)}`} aria-hidden="true"></i>
            </button>
            <button 
              onClick={handleMobileMenuToggle}
              className="header-menu-btn"
              aria-label={t('common.openMenu')} 
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
            </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="header-mobile-menu">
            <div className="header-mobile-links">
              <a href="#about" onClick={handleLinkClick} className="header-mobile-link">{t('nav.about')}</a>
              <a href="#projects" onClick={handleLinkClick} className="header-mobile-link">{t('nav.projects')}</a>
              <a href="#skills" onClick={handleLinkClick} className="header-mobile-link">{t('nav.skills')}</a>
             
              <a href="/assets/docs/Frontend_Developer_Resume (4).pdf" download="Frontend_Developer_Resume.pdf" onClick={handleLinkClick} className="header-mobile-resume">
                <i className="fas fa-download" aria-hidden="true"></i>
                {t('nav.downloadResume')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
