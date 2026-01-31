import './Rafting.css';

export const RaftingCategory = ({  }) => {
  return (
    <div className={`rafting-root $`}>
      <div className="rafting-container">
        <p className="rafting-title">
          Сплавы
        </p>
        <div className="rafting-background">
          <img 
            className="rafting-image" 
            alt="" 
            src="/assets/Categories/rafting/background.svg" 
          />
        </div>
        <div className="rafting-character-wrapper">
          <div className="rafting-character-inner">
            <div className="rafting-character-rotated">
              <div className="rafting-character">
                <div className="rafting-character-content">
                  <img 
                    className="rafting-image" 
                    alt="" 
                    src="/assets/Categories/rafting/character.svg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};