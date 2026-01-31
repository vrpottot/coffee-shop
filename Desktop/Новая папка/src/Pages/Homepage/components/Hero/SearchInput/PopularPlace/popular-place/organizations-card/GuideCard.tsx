import type { GuideCardProps } from './types';
import s from './styles.module.css';
import { cn } from '../../../shared/lib';
import { BinocularsIcon } from './BinocularsIcon';

export const GuideCard = ({
  organizationName,
  description,
  onClick,
  className,
}: GuideCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={cn(s.root, className)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={s.iconWrapper}>
        <BinocularsIcon />
      </div>
      <div className={s.content}>
        <div className={s.organizationName}>{organizationName}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};
