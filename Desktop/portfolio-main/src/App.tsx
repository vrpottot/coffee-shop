import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { LanguageProvider } from './hooks/useLanguage'
import { useTranslation } from './hooks/useTranslation'
import Header from './components/sections/Header/Header'
import Hero from './components/sections/Hero/Hero'
import TechStack from './components/sections/TechStack/TechStack'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Projects from './components/sections/Projects/Projects'
import Footer from './components/sections/Footer/Footer'
import ScrollToTop from './components/shared/ScrollToTop/ScrollToTop'
import ReadingProgress from './components/shared/ReadingProgress/ReadingProgress'
import ParticleDots from './components/shared/ParticleDots/ParticleDots'
import Preloader from './components/shared/Preloader/Preloader'

function AppContent() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.className = 'antialiased overflow-x-hidden relative'
  }, [theme])

  return (
    <div 
      className="app-container"
      style={{ 
        backgroundColor: 'var(--color-background)', 
        color: 'var(--color-secondary)',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        width: '100%'
      }}
    >
      <a href="#main" className="skip-to-content">{t('common.skipToContent')}</a>
      <ReadingProgress />
      <Preloader />
      <ParticleDots />
      <div className="noise-bg"></div>
      
      <Header />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
