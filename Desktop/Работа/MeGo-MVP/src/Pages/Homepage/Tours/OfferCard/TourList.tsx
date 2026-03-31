import { useMemo, useState, type JSX } from "react";
import OfferCard from "./OfferCard";
import type { Tour } from "./types/type";
import { mockTours } from "./mocks/tours.mock";
import type { SortType } from "../CardsSorting/types";
import Pagination from "./Pagination";
import { sortTours } from "./utils/sortTours";

interface TourListProps {
  sort: SortType;
}

function TourList({ sort }: TourListProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const tours: Tour[] = useMemo(
    () =>
      Array.from({ length: 200 }, (_, index) => {
        const original = mockTours[index % mockTours.length];

        return {
          ...original,
          id: `${original.id}-${index}`,
        };
      }),
    []
  );

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const sortedTours = useMemo(() => sortTours(tours, sort), [tours, sort]);
  const currentCards = sortedTours.slice(firstIndex, lastIndex);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {currentCards.map((tour) => (
          <OfferCard key={tour.id} tour={tour} />
        ))}
      </div>

      {/* Пагинация */}
      <Pagination
        totalCards={sortedTours.length}
        currentPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default TourList;
