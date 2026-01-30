import React from 'react';
import './PopularPlaceCard.css';

interface PopularPlaceCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

export function PopularPlaceCard({ title, description, iconSrc }: PopularPlaceCardProps) {
  return (
    <div className="popular-place-card">
      <div className="popular-place-card__content">
        <div className="popular-place-card__icon-wrapper">
          <div className="popular-place-card__icon">
            <img src={iconSrc} alt="" className="popular-place-card__icon-img" />
          </div>
        </div>
        <div className="popular-place-card__text">
          <p className="popular-place-card__title">{title}</p>
          <p className="popular-place-card__description">{description}</p>
        </div>
      </div>
    </div>
  );
}