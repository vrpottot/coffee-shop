import React from 'react'
import './ToursPage.css'
import Filter from './Filter/Filter'
import { Header } from '../components/Header/Header'
import HeroFilter from './HeroFilter/HeroFilter'
import {Footer} from '../components/Footer/Footer'

const ToursPage: React.FC = () => {
  return (
    <div>
        <Header />
        <HeroFilter />
        <div className="results-count">
          <p>Найдено: <span className='results-count-number'>200</span> предложений</p>
        </div>
        <div className="filter-container">
          <Filter />
        </div>
        <Footer />
    </div>
  )
}

export default ToursPage