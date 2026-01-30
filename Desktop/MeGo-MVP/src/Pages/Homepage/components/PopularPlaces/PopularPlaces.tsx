import React from 'react';
import './PopularPlaces.css';
import { TourZoneCard } from './TourZoneCard/TourZoneCard';
import { OrganizationCard } from './OrganizationCard/OrganizationCard';
import { PopularPlaceCard } from './PopularPlaceCard/PopularPlaceCard';

export function PopularPlaces() {
  return (
    <section className="popular-places">
      <h2 className="popular-places__title">Популярные места</h2>
      
      <div className="popular-places__section">
        <h3 className="popular-places__section-title">Турзоны</h3>
        <div className="popular-places__cards">
          <TourZoneCard
            title="Восхождение на Хан-Тенгри (14 дней)"
            price="от 1 250 000 ₸"
            iconSrc="/assets/icon/Экскусии.svg"
          />
          <TourZoneCard
            title="Восхождение на Хан-Тенгри (14 дней)"
            price="от 1 250 000 ₸"
            iconSrc="/assets/icon/Экскусии.svg"
          />
        </div>
      </div>

      <div className="popular-places__section">
        <h3 className="popular-places__section-title">Организаторы</h3>
        <div className="popular-places__cards">
          <OrganizationCard
            organizationName='ТОО "Хан-Торе"'
            description="Организатор просмотра достопримечательностей"
            iconSrc="/assets/icon/Экскусии.svg"
          />
          <OrganizationCard
            organizationName='ТОО "Хан-Торе"'
            description="Организатор просмотра достопримечательностей"
            iconSrc="/assets/icon/Экскусии.svg"
          />
          <OrganizationCard
            organizationName='ТОО "Хан-Торе"'
            description="Организатор просмотра достопримечательностей"
            iconSrc="/assets/icon/Экскусии.svg"
          />
        </div>
      </div>

      <div className="popular-places__section">
        <h3 className="popular-places__section-title">Туристы часто посещают</h3>
        <div className="popular-places__cards">
          <PopularPlaceCard
            title="Almaty Horse & Polo Club"
            description="Конные прогулки верхом"
            iconSrc="/assets/icon/Экскусии.svg"
          />
          <PopularPlaceCard
            title="Almaty Horse & Polo Club"
            description="Конные прогулки верхом"
            iconSrc="/assets/icon/Экскусии.svg"
          />
          <PopularPlaceCard
            title="Almaty Horse & Polo Club"
            description="Конные прогулки верхом"
            iconSrc="/assets/icon/Экскусии.svg"
          />
        </div>
      </div>
    </section>
  );
}