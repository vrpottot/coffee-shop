import type { TourCardProps } from './types';
import s from './styles.module.css';
import { HorseRiderIcon } from './HorseRiderIcon';
export const TourCard = ({ title, price, onClick, className }: TourCardProps) => {
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
      <div className={s.iconWrapper}>
        <HorseRiderIcon />
      </div>
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  );
};
