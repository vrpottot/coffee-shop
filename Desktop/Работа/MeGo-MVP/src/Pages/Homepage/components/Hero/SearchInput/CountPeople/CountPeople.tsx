import React, { useState, useEffect } from 'react';
import s from './styles.module.css';
import type { CountProps } from './types';

export const CountPeople: React.FC<CountProps> = ({
  adults: initialAdults,
  children: initialChildren,
  min = 0,
  max = 10,
  onCountChange,
}) => {
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  
  // Обновляем состояние при изменении пропсов
  useEffect(() => {
    setAdults(initialAdults);
    setChildren(initialChildren);
  }, [initialAdults, initialChildren]);
  
  const handleAdultIncrement = () => {
    if (adults + children < max) {
      const newAdults = adults + 1;
      setAdults(newAdults);
      onCountChange(newAdults, children);
    }
  };
  
  const handleAdultDecrement = () => {
    if (adults > min) {
      const newAdults = adults - 1;
      setAdults(newAdults);
      onCountChange(newAdults, children);
    }
  };
  
  const handleChildIncrement = () => {
    if (children < 5) {
      const newChildren = children + 1;
      setChildren(newChildren);
      onCountChange(adults, newChildren);
    }
  };
  
  const handleChildDecrement = () => {
    if (children > 0) {
      const newChildren = children - 1;
      setChildren(newChildren);
      onCountChange(adults, newChildren);
    }
  };
  
  const total = adults + children;
  
  const isAdultDecrementDisabled = adults <= min;
  const isAdultIncrementDisabled = adults + children >= max;
  const isChildDecrementDisabled = children <= 0;
  const isChildIncrementDisabled = adults + children >= max;
  return (
    <div>
      <div className={s.blockAge}>
        <div className={s.childPar}>
          <div className={s.ageCard}>
            <p className={s.ageTitle}>Взрослые</p>
            <h6 className={s.ageToAge}>от 16</h6>
          </div>
          <div className={s.counter}>
            <button
              className={s.counterBtn}
              onClick={handleAdultDecrement}
              disabled={isAdultDecrementDisabled}
              aria-label="Уменьшить"
            >
              -
            </button>
            <div className={s.sepator}></div>
            <h3 className={s.count}>{adults}</h3>
            <div className={s.sepator}></div>
            <button
              className={s.counterBtn}
              onClick={handleAdultIncrement}
              disabled={isAdultIncrementDisabled}
              aria-label="Увеличить"
            >
              +
            </button>
          </div>
        </div>
        <div className={s.sepatorDiv}></div>
        <div className={s.childPar}>
          <div className={s.ageCard}>
            <p className={s.ageTitle}>Дети</p>
            <h6 className={s.ageToAge}>до 16</h6>
          </div>
          <div className={s.counter}>
            <button
              className={s.counterBtn}
              onClick={handleChildDecrement}
              disabled={isChildDecrementDisabled}
              aria-label="Уменьшить"
            >
              -
            </button>
            <span className={s.sepator}></span>
            <h3 className={s.count}>{children}</h3>
            <span className={s.sepator}></span>
            <button
              className={s.counterBtn}
              onClick={handleChildIncrement}
              disabled={isChildIncrementDisabled}
              aria-label="Увеличить"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Хелпер для склонения слова "человек"
const getPersonWord = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'человек';
  }
  
  switch (lastDigit) {
    case 1: return 'человек';
    case 2:
    case 3:
    case 4: return 'человека';
    default: return 'человек';
  }
};
