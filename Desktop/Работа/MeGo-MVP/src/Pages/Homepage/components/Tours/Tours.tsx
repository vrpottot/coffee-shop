import React, { useRef, useState, useEffect } from "react";
import { EventCard } from "./EventCard/EventCard";
import "./Tours.css";

const toursData = [
  {
    id: 1,
    title: "Прогулки на лошадях",
    description:
      "Конноспортивный комплекс Almaty Horse&Polo Club — это уютный семейный уголок для всех, кому интересны конный спорт, верховая езда, конный туризм и для тех, кто только планирует познакомиться с этим завораживающим миром!",
    likesCount: "1250",
    location: "Almaty Horse & Polo Club",
    imageUrl: "/assets/Categories/EventCard/event-image.png",
  },
  {
    id: 2,
    title: "Прогулки на лошадях",
    description:
      "Конноспортивный комплекс Almaty Horse&Polo Club — это уютный семейный уголок для всех, кому интересны конный спорт, верховая езда, конный туризм и для тех, кто только планирует познакомиться с этим завораживающим миром!",
    likesCount: "1250",
    location: "Almaty Horse & Polo Club",
    imageUrl: "/assets/Categories/EventCard/event-image.png",
  },
  {
    id: 3,
    title: "Прогулки на лошадях",
    description:
      "Конноспортивный комплекс Almaty Horse&Polo Club — это уютный семейный уголок для всех, кому интересны конный спорт, верховая езда, конный туризм и для тех, кто только планирует познакомиться с этим завораживающим миром!",
    likesCount: "1250",
    location: "Almaty Horse & Polo Club",
    imageUrl: "/assets/Categories/EventCard/event-image.png",
  },
];

function Tours() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setShowPrevButton(carouselRef.current.scrollLeft > 10);
      }
    };

    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 726,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -726,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="tours-section">
      <div className="tours-header">
        <h2 className="tours-in-kz-title">Туры в Казахстане</h2>
      </div>
      <div className="tours-carousel-wrapper">
        {showPrevButton && (
          <button
            className="tours-carousel-button tours-carousel-button--prev"
            onClick={handlePrev}
          >
            &#10094;
          </button>
        )}
        <div className="tours-carousel-container" ref={carouselRef}>
          <div className="tours-carousel-items">
            {toursData.map((tour) => (
              <div key={tour.id} className="tours-carousel-item">
                <EventCard
                  title={tour.title}
                  description={tour.description}
                  likesCount={tour.likesCount}
                  location={tour.location}
                  imageUrl={tour.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="tours-carousel-button tours-carousel-button--next"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Tours;