import './Hiking.css';

export const HikingCategory = ({  }) => {
  return (
    <div className={`hiking-root `}>
      <div className="hiking-container">
        <div className="hiking-mountains-wrapper">
          <div className="hiking-mountains-rotated">
            <div className="hiking-mountains">
              <img 
                className="hiking-image" 
                alt="" 
                src="/assets/Categories/hiking/mountains.svg" 
              />
            </div>
          </div>
        </div>
        <div className="hiking-rock-wrapper">
          <div className="hiking-rock-rotated">
            <div className="hiking-rock">
              <img 
                className="hiking-image" 
                alt="" 
                src="/assets/Categories/hiking/rock.svg" 
              />
            </div>
          </div>
        </div>
        <div className="hiking-character-wrapper">
          <div className="hiking-character-rotated">
            <div className="hiking-character">
              <div className="hiking-character-inner">
                <img 
                  className="hiking-image" 
                  alt="" 
                  src="/assets/Categories/hiking/character.svg" 
                />
              </div>
            </div>
          </div>
        </div>
        <p className="hiking-title">
          Экспедиции
        </p>
        <div className="hiking-decoration">
          <img 
            className="hiking-image" 
            alt="" 
            src="/assets/Categories/hiking/decoration.svg" 
          />
        </div>
      </div>
    </div>
  );
};