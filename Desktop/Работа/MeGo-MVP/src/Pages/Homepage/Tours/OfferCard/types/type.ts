import type { DifficultyLevelType } from "../../DifficultyLevel/types";
export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  priceFrom: number;
  sortBy: string;
  difficulty: DifficultyLevelType; 
  startDate: string;
  endDate: string;
  moreDates: number
}