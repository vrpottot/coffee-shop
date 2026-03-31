import type { DifficultyLevelType } from './types';

export const DIFFICULTY_CONFIG: Record<
  DifficultyLevelType,
  {
    label: string;
    variant: 'easy' | 'medium' | 'hard';
  }
> = {
  easy: {
    label: 'Лёгкий',
    variant: 'easy',
  },
  medium: {
    label: 'Средний',
    variant: 'medium',
  },
  hard: {
    label: 'Сложный',
    variant: 'hard',
  },
};
