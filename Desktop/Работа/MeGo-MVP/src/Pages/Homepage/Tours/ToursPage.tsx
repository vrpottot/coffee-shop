import React from 'react'
import { useState } from "react";
import './ToursPage.css'
import Filter from './Filter/Filter'
import { Header } from '../components/Header/Header'
import HeroFilter from './HeroFilter/HeroFilter'
import {Footer} from '../components/Footer/Footer'
import TourList from './OfferCard/TourList'
import { CardsSorting } from "./CardsSorting/CardsSorting";
import type { SortType } from "./CardsSorting/types";

const ToursPage: React.FC = () => {
  const [sort, setSort] = useState<SortType>("popularity");

  return (
    <div>
        <Header />
        <HeroFilter />
        <div className="results-sort">
          <div className="results-count">
            <p>Найдено: <span className='results-count-number'>200</span> предложений</p>
          </div>
          <div className="sort">
            <p>сортировать: </p>
            <CardsSorting value={sort} onChange={setSort} />
            
          </div>
        </div>

        <div className="filter-container">
          <Filter />
          <TourList sort={sort}/>
        </div>
        <Footer />
    </div>
  )
}

export default ToursPage
