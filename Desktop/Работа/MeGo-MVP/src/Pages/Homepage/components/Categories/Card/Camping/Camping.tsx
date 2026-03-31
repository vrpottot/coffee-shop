
import './Camping.css';

export const CampingCategory = ({ className }: { className?: string }) => {
  return (
    <div className={`camping-root ${className || ''}`}>
      <div className="camping-container">
        <div className="camping-background">
          <img 
            className="camping-image" 
            alt="" 
            src="/assets/Categories/camping/background-circle.svg" 
          />
        </div>
        <p className="camping-title">
          Походы
        </p>
        <div className="camping-decoration">
          <img 
            className="camping-image" 
            alt="" 
            src="/assets/Categories/camping/decoration.svg" 
          />
        </div>
        <div className="camping-scene">
          <div className="camping-floor">
            <img 
              className="camping-image" 
              alt="" 
              src="/assets/Categories/camping/floor.svg" 
            />
          </div>
          <div className="camping-trunk">
            <img 
              className="camping-image" 
              alt="" 
              src="/assets/Categories/camping/trunk.svg" 
            />
          </div>
          <div className="camping-character3">
            <img 
              className="camping-image" 
              alt="" 
              src="/assets/Categories/camping/character-3.svg" 
            />
          </div>
          <div className="camping-character2">
            <img 
              className="camping-image" 
              alt="" 
              src="/assets/Categories/camping/character-2.svg" 
            />
          </div>
          <div className="camping-fire">
            <img 
              className="camping-image" 
              alt="" 
              src="/assets/Categories/camping/fire.svg" 
            />
          </div>
          <div className="camping-character1">
            <img 
              className="camping-image" 
              alt="" 
              src="/assets/Categories/camping/character-1.svg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};