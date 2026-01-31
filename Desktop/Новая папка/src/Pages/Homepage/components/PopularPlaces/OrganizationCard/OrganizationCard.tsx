import React from 'react';
import './OrganizationCard.css';

interface OrganizationCardProps {
  organizationName: string;
  description: string;
  iconSrc: string;
}

export function OrganizationCard({ organizationName, description, iconSrc }: OrganizationCardProps) {
  return (
    <div className="organization-card">
      <div className="organization-card__content">
        <div className="organization-card__icon">
          <img src={iconSrc} alt="" className="organization-card__icon-img" />
        </div>
        <div className="organization-card__text">
          <p className="organization-card__name">{organizationName}</p>
          <p className="organization-card__description">{description}</p>
        </div>
      </div>
    </div>
  );
}