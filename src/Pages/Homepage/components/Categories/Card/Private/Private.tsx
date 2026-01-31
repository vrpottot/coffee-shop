import './Private.css';

export const PrivateCategory = ({  }) => {
  return (
    <div className={`private-root }`}>
      <div className="private-container">
        <div className="private-background">
          <img 
            className="private-image" 
            alt="" 
            src="/assets/Categories/private/background.svg" 
          />
        </div>
        <p className="private-title">
          Авторские
        </p>
        <div className="private-character2">
          <img 
            className="private-image" 
            alt="" 
            src="/assets/Categories/private/character-2.svg" 
          />
        </div>
        <div className="private-character1">
          <img 
            className="private-image" 
            alt="" 
            src="/assets/Categories/private/character-1.svg" 
          />
        </div>
      </div>
    </div>
  );
};