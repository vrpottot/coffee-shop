import './Mountain.css';

export const MountainCategory = ({  }) => {
  return (
    <div className={`mountain-root `}>
      <div className="mountain-container">
        <div className="mountain-mountains-wrapper">
          <div className="mountain-mountains">
            <img 
              className="mountain-image" 
              alt="" 
              src="/assets/Categories/mountain/mountains.svg" 
            />
          </div>
        </div>
        <p className="mountain-title">
          Горы
        </p>
        <div className="mountain-character">
          <div className="mountain-character-wrapper">
            <img 
              className="mountain-image" 
              alt="" 
              src="/assets/Categories/mountain/character.svg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};