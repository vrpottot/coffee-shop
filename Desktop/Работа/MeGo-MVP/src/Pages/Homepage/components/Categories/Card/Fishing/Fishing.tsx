import './Fishing.css';

export const FishingCategory = ({  }) => {
  return (
    <div className={`fishing-root `}>
      <div className="fishing-container">
        <div className="fishing-background">
          <img 
            className="fishing-image" 
            alt="" 
            src="/assets/Categories/fishing/background.svg" 
          />
        </div>
        <p className="fishing-title">
          Рыболовные
        </p>
        <div className="fishing-character">
          <div className="fishing-character-wrapper">
            <img 
              className="fishing-image" 
              alt="" 
              src="/assets/Categories/fishing/character.svg" 
            />
          </div>
        </div>
        <div className="fishing-fish">
          <div className="fishing-fish-wrapper">
            <img 
              className="fishing-image" 
              alt="" 
              src="/assets/Categories/fishing/fish.svg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};