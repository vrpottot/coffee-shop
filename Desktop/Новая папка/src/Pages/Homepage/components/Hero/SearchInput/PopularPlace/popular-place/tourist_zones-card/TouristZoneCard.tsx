import type { TouristZoneCardProps } from './types';
import s from './styles.module.css';

export const TouristZoneCard = ({
  name,
  description,
  onClick,
  className,
}: TouristZoneCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`${s.root} ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={s.iconWrapper}></div>
      <div className={s.content}>
        <div className={s.name}>{name}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};
