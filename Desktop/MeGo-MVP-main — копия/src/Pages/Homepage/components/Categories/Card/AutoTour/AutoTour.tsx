/// <reference types="react" />
import './AutoTour.css';

export const AutotourCategory = ({ className }: { className?: string }) => {
  return (
    <div className={`autotour-root ${className || ''}`}>
      <div className="autotour-container">
        <p className="autotour-title">
          Автотуры
        </p>
        <div className="autotour-car">
          <div className="autotour-car-wrapper">
            <img 
              className="autotour-image" 
              alt="" 
              src="/assets/Categories/autotour/car.svg" 
            />
          </div>
        </div>
        <div className="autotour-floor-wrapper">
          <div className="autotour-floor">
            <div className="autotour-floor-inner">
              <img 
                className="autotour-image" 
                alt="" 
                src="/assets/Categories/autotour/floor.svg" 
              />
            </div>
          </div>
        </div>
        <div className="autotour-clouds">
          <img 
            className="autotour-image" 
            alt="" 
            src="/assets/Categories/autotour/clouds.svg" 
          />
        </div>
      </div>
    </div>
  );
};