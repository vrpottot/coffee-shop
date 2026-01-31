import './Sport.css';

export const SportCategory = ({ }) => {
  return (
    <div className={`sport-root $`}>
      <div className="sport-container">
        <div className="sport-background">
          <img 
            className="sport-image" 
            alt="" 
            src="/assets/Categories/sport/background.svg" 
          />
        </div>
        <p className="sport-title">
          Спортивные
        </p>
        <div className="sport-character1">
          <img 
            className="sport-image" 
            alt="" 
            src="/assets/Categories/sport/character-1.svg" 
          />
        </div>
        <div className="sport-character2">
          <img 
            className="sport-image" 
            alt="" 
            src="/assets/Categories/sport/character-2.svg" 
          />
        </div>
      </div>
    </div>
  );
};