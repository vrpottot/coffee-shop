import clsx from 'clsx';
import { DIFFICULTY_CONFIG } from './constants';
import type { DifficultyLevelProps } from './types';
import s from './styles.module.css';

export const DifficultyLevel = ({ level, className }: DifficultyLevelProps) => {
  const { label, variant } = DIFFICULTY_CONFIG[level];

  return (
    <div className={clsx(s.root, s[variant], className)}>
      {label}
    </div>
  );
};
