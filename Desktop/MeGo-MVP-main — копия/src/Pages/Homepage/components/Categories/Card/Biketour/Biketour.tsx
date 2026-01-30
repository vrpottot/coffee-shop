
import './Biketour.css';

export const BiketourCategory = ({ className }: { className?: string }) => {
  return (
    <div className={`biketour-root ${className || ''}`}>
      <div className="biketour-container">
        <div className="biketour-background">
          <img 
            className="biketour-image" 
            alt="" 
            src="/assets/Categories/biketour/background.svg" 
          />
        </div>
        <p className="biketour-title">
          Велотуры
        </p>
        <div className="biketour-character2-wrapper">
          <div className="biketour-character2-rotated">
            <div className="biketour-character2">
              <img 
                className="biketour-image" 
                alt="" 
                src="/assets/Categories/biketour/character-2.svg" 
              />
            </div>
          </div>
        </div>
        <div className="biketour-character1-wrapper">
          <div className="biketour-character1-rotated">
            <div className="biketour-character1">
              <img 
                className="biketour-image" 
                alt="" 
                src="/assets/Categories/biketour/character-1.svg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};