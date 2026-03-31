import type { SortOption } from './types';

export const SORT_OPTIONS_LIST: SortOption[] = [
  { value: 'popularity', label: 'По популярности' },
  { value: 'reviews', label: 'По количеству отзывов' },
  { value: 'recommended', label: 'Рекомендовано' },
  { value: 'new', label: 'Новые' },
  { value: 'nearest', label: 'Ближайшие' },
  { value: 'price_asc', label: 'Сначала дешёвые' },
  { value: 'price_desc', label: 'Сначала дорогие' },
];
