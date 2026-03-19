import { useState } from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { useTranslation } from '../../../hooks/useTranslation'
import './Footer.css'

type CopiedType = 'phone' | 'email' | null

export default function Footer() {
  const sectionRef = useScrollAnimation({ threshold: 0.2, animationClass: 'fade-in-up' })
  const { t } = useTranslation()
  const [copied, setCopied] = useState<CopiedType>(null)

  const handleCopy = (text: string, type: CopiedType) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(type)
        setTimeout(() => setCopied(null), 2000)
      })
    }
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, text: string, type: CopiedType) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      handleCopy(text, type)
    }
  }

  return (
    <footer id="contact" ref={sectionRef} className="footer-section" role="contentinfo">
      <div className="footer-container">
        <div className="footer-header">
          <div className="footer-status">
            <i className="fas fa-comments"></i>
            <span>{t('footer.status')}</span>
          </div>
          <h2 className="footer-title">
            {t('footer.title')} <br />
            <span className="footer-title-gradient">{t('footer.titleAccent')}</span>
          </h2>
          <p className="footer-description">
            {t('footer.description')}
          </p>
        </div>

        <div className="footer-contacts">
          <a
            href="tel:+79889977372"
            onClick={(e) => handleContactClick(e, '+79889977372', 'phone')}
            className="footer-contact-card"
            title={t('footer.copyHint')}
          >
            <div className="footer-contact-icon footer-contact-icon-blue">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="footer-contact-title">{t('footer.call')}</h3>
            <p className="footer-contact-value">+7 (988) 997 73 72</p>
            {copied === 'phone' && <p className="footer-contact-copied">{t('footer.copied')}</p>}
            <span className="footer-contact-action">
              {t('footer.connect')} <i className="fas fa-arrow-right"></i>
            </span>
          </a>

          <a
            href="mailto:vmasyuk28@mail.ru"
            onClick={(e) => handleContactClick(e, 'vmasyuk28@mail.ru', 'email')}
            className="footer-contact-card"
            title={t('footer.copyHint')}
          >
            <div className="footer-contact-icon footer-contact-icon-violet">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="footer-contact-title">{t('footer.email')}</h3>
            <p className="footer-contact-value">vmasyuk28@mail.ru</p>
            {copied === 'email' && <p className="footer-contact-copied">{t('footer.copied')}</p>}
            <span className="footer-contact-action">
              {t('footer.write')} <i className="fas fa-arrow-right"></i>
            </span>
          </a>

          <a href="https://t.me/tuttuto0" target="_blank" rel="noopener noreferrer" className="footer-contact-card">
            <div className="footer-contact-icon footer-contact-icon-teal">
              <i className="fab fa-telegram"></i>
            </div>
            <h3 className="footer-contact-title">{t('footer.telegram')}</h3>
            <p className="footer-contact-value">@tuttuto0</p>
            <span className="footer-contact-action">
              {t('footer.open')} <i className="fas fa-arrow-right"></i>
            </span>
          </a>

          <div className="footer-contact-card">
            <div className="footer-contact-icon footer-contact-icon-orange">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="footer-contact-title">{t('footer.location')}</h3>
            <p className="footer-contact-value">{t('footer.locationValue')}</p>
            <span className="footer-contact-action">
              <i className="far fa-clock"></i> {t('footer.timezone')}
            </span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <span className="footer-links-title">{t('footer.navigation')}</span>
            <a href="#main" className="footer-link">{t('footer.home')}</a>
            <a href="#about" className="footer-link">{t('nav.about')}</a>
            <a href="#projects" className="footer-link">{t('nav.projects')}</a>
          </div>
          <div className="footer-links-column">
            <span className="footer-links-title">{t('footer.social')}</span>
            <a href="https://github.com/vrpottot" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://t.me/tuttuto0" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">{t('footer.copyright')}</span>
          <div className="footer-status-indicator">
            <span className="footer-status-dot"></span>
            {t('footer.systems')}
          </div>
        </div>
      </div>
    </footer>
  )
}
