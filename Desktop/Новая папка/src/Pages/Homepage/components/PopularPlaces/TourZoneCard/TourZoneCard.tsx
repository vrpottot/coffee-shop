import React from 'react';
import './TourZoneCard.css';

interface TourZoneCardProps {
  title: string;
  price: string;
  iconSrc: string;
}

export function TourZoneCard({ title, price, iconSrc }: TourZoneCardProps) {
  return (
    <div className="tour-zone-card">
      <div className="tour-zone-card__content">
        <div className="tour-zone-card__icon-wrapper">
          <div className="tour-zone-card__icon">
            <img src={iconSrc} alt="" className="tour-zone-card__icon-img" />
          </div>
        </div>
        <div className="tour-zone-card__text">
          <p className="tour-zone-card__title">{title}</p>
          <p className="tour-zone-card__price">{price}</p>
        </div>
      </div>
    </div>
  );
}