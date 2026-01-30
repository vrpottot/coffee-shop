import './EventCard.css';

export const EventCard = ({ 
  title = "Прогулки на лошадях", 
  description = "Конноспортивный комплекс Almaty Horse&Polo Club — это уютный семейный уголок для всех, кому интересны конный спорт, верховая езда, конный туризм и для тех, кто только планирует познакомиться с этим завораживающим миром!", 
  likesCount = "1250", 
  location = "Almaty Horse & Polo Club",
  imageUrl = "/assets/Categories/EventCard/event-image.png"
}) => {
  return (
    <div className={`event-card-root $`}>
      <div className="event-card-image-container">
        <div className="event-card-image-wrapper">
          <div className="event-card-image-bg" />
          <img className="event-card-image" alt={title} src={imageUrl} />
        </div>
      </div>
      <div className="event-card-description-container">
        <div className="event-card-text-section">
          <p className="event-card-title">
            {title}
          </p>
          <p className="event-card-description">
            {description}
          </p>
        </div>
        <div className="event-card-footer">
          <div className="event-card-info">
            <div className="event-card-rating-profile">
              <div className="event-card-rating">
                <div className="event-card-icon">
                  <img 
                    className="event-card-icon-img" 
                    alt="" 
                    src="/assets/Categories/EventCard/heart-icon.svg" 
                  />
                </div>
                <p className="event-card-rating-text">
                  {likesCount}
                </p>
              </div>
              <div className="event-card-location-wrapper">
                <div className="event-card-icon">
                  <img 
                    className="event-card-icon-img" 
                    alt="" 
                    src="/assets/Categories/EventCard/map-pin-icon.svg" 
                  />
                </div>
                <p className="event-card-location-text">
                  {location}
                </p>
              </div>
            </div>
          </div>
          <div className="event-card-arrow">
            <div className="event-card-arrow-icon">
              <img 
                className="event-card-arrow-img" 
                alt="" 
                src="/assets/Categories/EventCard/arrow-icon.svg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};