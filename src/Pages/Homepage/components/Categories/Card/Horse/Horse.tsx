import './Horse.css';

export const HorseCategory = ({  }) => {
  return (
    <div className={`horse-root `}>
      <div className="horse-container">
        <div className="horse-background">
          <img 
            className="horse-image" 
            alt="" 
            src="/assets/Categories/horse/background.svg" 
          />
        </div>
        <div className="horse-path">
          <img 
            className="horse-image" 
            alt="" 
            src="/assets/Categories/horse/path.svg" 
          />
        </div>
        <p className="horse-title">
          Конные
        </p>
        <div className="horse-character">
          <img 
            className="horse-image" 
            alt="" 
            src="/assets/Categories/horse/character.svg" 
          />
        </div>
      </div>
    </div>
  );
};