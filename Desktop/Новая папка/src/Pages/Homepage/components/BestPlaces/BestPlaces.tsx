import React, { useRef, useState, useEffect } from 'react';
import { PlaceCard } from './PlaceCard/PlaceCard';
import './BestPlaces.css';

interface Place {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
}

interface BestPlacesProps {
  title?: string;
  places?: Place[];
}

export const BestPlaces = ({
  title = "Лучшие места Казахстана",
  places = [
    {
      id: '1',
      title: "Хан-Тенгри",
      location: "Местоположение",
      description: "Хан-Тенгри расположен к востоку от озера Иссык-Куль, недалеко от границы с Казахстаном и Китаем. Хотя его вершина",
      imageUrl: "/assets/Categories/PlaceCard/place-image.png"
    },
    {
      id: '2',
      title: "Хан-Тенгри",
      location: "Местоположение",
      description: "Хан-Тенгри расположен к востоку от озера Иссык-Куль, недалеко от границы с Казахстаном и Китаем. Хотя его вершина",
      imageUrl: "/assets/Categories/PlaceCard/place-image.png"
    },
    {
      id: '3',
      title: "Хан-Тенгри",
      location: "Местоположение",
      description: "Хан-Тенгри расположен к востоку от озера Иссык-Куль, недалеко от границы с Казахстаном и Китаем. Хотя его вершина",
      imageUrl: "/assets/Categories/PlaceCard/place-image.png"
    },
    {
      id: '4',
      title: "Хан-Тенгри",
      location: "Местоположение",
      description: "Хан-Тенгри расположен к востоку от озера Иссык-Куль, недалеко от границы с Казахстаном и Китаем. Хотя его вершина",
      imageUrl: "/assets/Categories/PlaceCard/place-image.png"
    },
    {
      id: '5',
      title: "Хан-Тенгри",
      location: "Местоположение",
      description: "Хан-Тенгри расположен к востоку от озера Иссык-Куль, недалеко от границы с Казахстаном и Китаем. Хотя его вершина",
      imageUrl: "/assets/Categories/PlaceCard/place-image.png"
    }
  ]
}: BestPlacesProps) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const handleScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowPrev(scrollLeft > 10);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 425; // cardWidth + gap
      
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="best-places-container">
      <div className="best-places-header">
        <h2 className="best-places-title">{title}</h2>
      </div>
      <div className="best-places-carousel-wrapper">
        {showPrev && (
          <button 
            className="best-places-arrow best-places-arrow--left" 
            onClick={() => scroll('left')}
            aria-label="Предыдущее"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        <div className="best-places-grid" ref={scrollContainer}>
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              title={place.title}
              location={place.location}
              description={place.description}
              imageUrl={place.imageUrl}
            />
          ))}
        </div>

        {showNext && (
          <button 
            className="best-places-arrow best-places-arrow--right" 
            onClick={() => scroll('right')}
            aria-label="Следующее"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};