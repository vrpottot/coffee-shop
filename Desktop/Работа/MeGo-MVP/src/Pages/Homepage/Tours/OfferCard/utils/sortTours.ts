import type { Tour } from "../types/type";
import type { SortType } from "../../CardsSorting/types";

const parseRuDate = (value: string): number => {
  const [day, month, year] = value.split(".").map(Number);
  if (!day || !month || !year) return 0;
  return new Date(year, month - 1, day).getTime();
};

export function sortTours(tours: Tour[], sort: SortType): Tour[] {
  const byDateAsc = (a: Tour, b: Tour) =>
    parseRuDate(a.startDate) - parseRuDate(b.startDate);
  const byDateDesc = (a: Tour, b: Tour) =>
    parseRuDate(b.startDate) - parseRuDate(a.startDate);
  const byId = (a: Tour, b: Tour) => a.id.localeCompare(b.id);

  return [...tours].sort((a, b) => {
    switch (sort) {
      case "popularity":
        return b.reviewsCount - a.reviewsCount || byId(a, b);
      case "reviews":
        return b.reviewsCount - a.reviewsCount || byId(a, b);
      case "recommended":
        return (
          b.rating - a.rating ||
          byId(a, b)
        );
      case "new":
        return byDateDesc(a, b) || byId(a, b);
      case "nearest":
        return byDateAsc(a, b) || byId(a, b);
      case "price_asc":
        return a.priceFrom - b.priceFrom || byId(a, b);
      case "price_desc":
        return b.priceFrom - a.priceFrom || byId(a, b);
      default:
        return byId(a, b);
    }
  });
}
