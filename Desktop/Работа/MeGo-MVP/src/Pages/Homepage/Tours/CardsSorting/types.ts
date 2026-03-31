export type SortType =
  | 'popularity'
  | 'reviews'
  | 'recommended'
  | 'new'
  | 'nearest'
  | 'price_asc'
  | 'price_desc';


export type SortOption = {
  value: SortType;
  label: string;
};


export type CardsSortingProps = {
  value: SortType;
  onChange: (value: SortType) => void;
  className?: string;
};
