import './Mototour.css';

export const MototourCategory = ({ }) => {
  return (
    <div className={`mototour-root `}>
      <div className="mototour-container">
        <div className="mototour-background">
          <img 
            className="mototour-image" 
            alt="" 
            src="/assets/Categories/mototour/background.svg" 
          />
        </div>
        <p className="mototour-title">
          Мототуры
        </p>
        <div className="mototour-character">
          <img 
            className="mototour-image" 
            alt="" 
            src="/assets/Categories/mototour/character.svg" 
          />
        </div>
      </div>
    </div>
  );
};