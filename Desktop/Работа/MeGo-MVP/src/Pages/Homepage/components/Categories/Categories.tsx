import React, { useState, useRef } from 'react';
import {AutotourCategory} from './Card/AutoTour/AutoTour'
import { BiketourCategory } from './Card/Biketour/Biketour'
import {CampingCategory} from './Card/Camping/Camping'
import { ClimbingCategory } from './Card/Climbing/Climbing'
import { FishingCategory } from './Card/Fishing/Fishing'
import { HikingCategory } from './Card/Hiking/Hiking'
import { HorseCategory } from './Card/Horse/Horse'
import { MototourCategory } from './Card/Mototour/Mototour'
import { MountainCategory } from './Card/Mountain/Mountain'
import { PrivateCategory } from './Card/Private/Private'
import { RaftingCategory } from './Card/Rafting/Rafting'
import { SkiCategory } from './Card/Ski/Ski'
import { SportCategory } from './Card/Sport/Sport'
import { ToursCategory } from './Card/Tours/Tours'
import './Categories.css'

function Categories() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      setShowLeftButton(scrollLeft > 10);
    }
  };

  const cards = [
    { id: 1, component: <SkiCategory /> },
    { id: 2, component: <BiketourCategory /> },
    { id: 3, component: <CampingCategory/> },
    { id: 4, component: <ToursCategory /> },
    { id: 5, component: <RaftingCategory /> },
    { id: 6, component: <AutotourCategory/> },
    { id: 7, component: <HorseCategory /> },
    { id: 8, component: <MototourCategory /> },
    { id: 9, component: <MountainCategory /> },
    { id: 10, component: <PrivateCategory /> },
    { id: 11, component: <FishingCategory /> },
    { id: 12, component: <ClimbingCategory/> },
    { id: 13, component: <SportCategory /> },
    { id: 14, component: <HikingCategory /> },
  ];

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h2 className="categories-title">Категории</h2>
      </div>
      <div className="carousel-wrapper-container">
        {showLeftButton && (
          <button className="carousel-button carousel-button-prev" onClick={handlePrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
  <path d="M18.7344 1.00007L1.73438 13.4725L18.7344 25.0001" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
          </button>
        )}
        <button className="carousel-button carousel-button-next" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
  <path d="M1 1.00007L18 13.4725L1 25.0001" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
        </button>
        <div className="carousel-container" ref={carouselRef} onScroll={handleScroll}>
          <div className="carousel-wrapper">
            {cards.map((card) => (
              <div key={card.id} className="carousel-item">
                {card.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories