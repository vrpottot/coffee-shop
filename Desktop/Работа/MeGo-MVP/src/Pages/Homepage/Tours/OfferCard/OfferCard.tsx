import type { Tour } from "./types/type";
import imageOfferCard from "./1.png";
import "./OfferCard.css";
import { CardsCategory } from "../CardsCategory/CardsCategory";
import { DifficultyLevel } from "../DifficultyLevel/DifficultyLevel";
import { StarIcon } from "../StarIcon/StarIcon";

interface OfferCardProps {
  tour: Tour;
}

const dayLabel = (count: number) => (count === 1 ? "дата" : "дат");


function OfferCard({ tour }: OfferCardProps) {
  return (
    <div className="offerTour">
      <div className="offerTourContainer">
        <div className="imageContainer">
          <StarIcon />
          
          <img
            className="offerTourImage"
            src={imageOfferCard}
            alt="imageOfferCard"
          />
          <DifficultyLevel
            level={tour.difficulty}
            className="difficultyBadge"
          />
        </div>

        <div className="textContainer">
          <h2 className="offerCardTitle">{tour.title}</h2>
          <CardsCategory
            meta={{
              types: ["camp", "expeditions", "ascent"],
            }}
          />
          <p className="offerCardDescription">{tour.description}</p>

          <div className="datesContainer">
            <div className="duration">
              {tour.startDate} - {tour.endDate}
            </div>
            <div className="moreDates">
              +{tour.moreDates} {dayLabel(tour.moreDates)}
            </div>
          </div>
        </div>
        
        <div className="rightColumn">
          <div className="tourRating">
            <p className="rate">{tour.rating}</p>
          </div>
          <p className="reviewTour">{tour.reviewsCount} отзыва</p>

          <div className="priceOffetTour">от {tour.priceFrom} ₸</div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
