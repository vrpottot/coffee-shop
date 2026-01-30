
import './Climbing.css';

export const ClimbingCategory = ({ className }: { className?: string }) => {
  return (
    <div className={`climbing-root ${className || ''}`}>
      <div className="climbing-container">
        <p className="climbing-title">
          Восхождение
        </p>
        <div className="climbing-mountains-wrapper">
          <div className="climbing-mountains-rotated">
            <div className="climbing-mountains">
              <img 
                className="climbing-image" 
                alt="" 
                src="/assets/Categories/climbing/mountains.svg" 
              />
            </div>
          </div>
        </div>
        <div className="climbing-character-wrapper">
          <div className="climbing-character">
            <img 
              className="climbing-image" 
              alt="" 
              src="/assets/Categories/climbing/character.svg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};