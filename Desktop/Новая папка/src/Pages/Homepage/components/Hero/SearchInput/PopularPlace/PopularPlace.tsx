// import React from 'react'
import type React from 'react';
import { TouristZoneCard } from './popular-place/tourist_zones-card';
import s from './styles.module.css';
import { TourCard } from './popular-place/tour-card';

const cards = [
  {
    title: 'Восхождение на Хан-Тенгри (14 дней)',
    price: 'от 1 250 000 〒',
    name: 'Турбаза «Жумбактас»',
    description: 'Описание краткое',
  }
]

export const PopularPlace: React.FC = () => {
  return (
    <div>
      <div className={s.popularPlaceContainer}>
        <p className={s.popularPlaceTitle}>Популярные места</p>
        <div className={s.popularPlaceCards}>
          <TouristZoneCard name={cards[0].name} description={cards[0].description} />

          {[...Array(5)].map((_, index) => (
            <TourCard
              key={index}
              title={cards[0].title}   // берём первый объект
              price={cards[0].price}   // берём первый объект
            />
          ))}
        </div>

      </div>
    </div>
  );
};
