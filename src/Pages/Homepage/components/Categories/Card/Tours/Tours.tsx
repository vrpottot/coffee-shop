import './Tours.css';

export const ToursCategory = ({ }) => {
  return (
    <div className={`tours-root $`}>
      <div className="tours-container">
        <div className="tours-background-circle">
          <img 
            className="tours-image" 
            alt="" 
            src="/assets/Categories/tours/background-circle.svg" 
          />
        </div>
        <p className="tours-title">
          Экскурсии
        </p>
        <div className="tours-decoration">
          <img 
            className="tours-image" 
            alt="" 
            src="/assets/Categories/tours/decoration.svg" 
          />
        </div>
        <div className="tours-characters">
          <div className="tours-character5">
            <div className="tours-character5-wrapper">
              <img 
                className="tours-image" 
                alt="" 
                src="/assets/Categories/tours/character-5.svg" 
              />
            </div>
          </div>
          <div className="tours-character3">
            <div className="tours-character3-wrapper">
              <img 
                className="tours-image" 
                alt="" 
                src="/assets/Categories/tours/character-3.svg" 
              />
            </div>
          </div>
          <div className="tours-character2">
            <div className="tours-character2-wrapper">
              <img 
                className="tours-image" 
                alt="" 
                src="/assets/Categories/tours/character-2.svg" 
              />
            </div>
          </div>
          <div className="tours-character1">
            <div className="tours-character1-wrapper">
              <img 
                className="tours-image" 
                alt="" 
                src="/assets/Categories/tours/character-1.svg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};