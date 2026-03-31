import './Ski.css';

export const SkiCategory = ({ }) => {
  return (
    <div className={`ski-root $`}>
      <div className="ski-container">
        <div className="ski-background-circle">
          <img 
            className="ski-image" 
            alt="" 
            src="/assets/Categories/ski/background-circle.svg" 
          />
        </div>
        <p className="ski-title">
          Лыжи и cноуборд
        </p>
        <div className="ski-character">
          <div className="ski-character-wrapper">
            <img 
              className="ski-image" 
              alt="" 
              src="/assets/Categories/ski/character.svg" 
            />
          </div>
        </div>
        <div className="ski-speed-lines">
          <div className="ski-speed-lines-wrapper">
            <img 
              className="ski-image" 
              alt="" 
              src="/assets/Categories/ski/speed-lines.svg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};