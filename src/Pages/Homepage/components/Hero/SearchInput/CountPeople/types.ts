export type CountProps = {
  adults: number;
  children: number;
  min?: number;
  max?: number;
  onCountChange: (adults: number, children: number) => void;
};
