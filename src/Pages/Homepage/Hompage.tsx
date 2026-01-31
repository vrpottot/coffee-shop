import { Header } from './components/Header/Header.tsx'
import Hero from './components/Hero/Hero.tsx'
import Categories from './components/Categories/Categories.tsx'
import { PopularPlaces } from './components/PopularPlaces/PopularPlaces.tsx'
import { BestPlaces } from './components/BestPlaces/BestPlaces.tsx'
import Tours from './components/Tours/Tours.tsx'
import Blog from './components/Blog/Blog.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { QuestionAndAnswers } from './components/Q&A/QuestionAndAnswers.tsx'

function Homepage() {
  return (
    <>
      <Header />
      <Hero />

      <div style={{ width: '100%', padding: '0 20px' }}>
        <Categories />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            margin: '35px 52px 0 52px', 
            alignItems: 'stretch',
            justifyContent: 'space-between',
            maxWidth: '1776px'
          }}>
            <PopularPlaces />
            <BestPlaces />
          </div>
          <Tours />
        </div>
      </div>

      <Blog />
      <QuestionAndAnswers />
      <Footer />
    </>
  )
}

export default Homepage
