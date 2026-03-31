import { useState, useEffect } from "react";
import "./Slider.css";

interface SliderProps {
  onChange?: (min: number, max: number) => void;
  min?: number;
  max?: number;
}

const DaysRangeSlider: React.FC<SliderProps> = ({ onChange, min: externalMin, max: externalMax }) => {
  const MIN = 1;
  const MAX = 36;

  // Use external values if provided, otherwise use internal state
  const [internalRange, setInternalRange] = useState<[number, number]>([1, 2]);
  
  // If external values are provided, use them; otherwise use internal state
  const currentMin = externalMin !== undefined ? externalMin : internalRange[0];
  const currentMax = externalMax !== undefined ? externalMax : internalRange[1];
  
  // Update internal state when external values change
  useEffect(() => {
    if (externalMin !== undefined && externalMax !== undefined) {
      setInternalRange([externalMin, externalMax]);
    }
  }, [externalMin, externalMax]);

  const percent = (value: number) =>
    ((value - MIN) / (MAX - MIN)) * 100;

  const update = (newMin: number, newMax: number) => {
    setInternalRange([newMin, newMax]);
    onChange?.(newMin, newMax);
  };

  // Use current values for display
  const [min, max] = externalMin !== undefined && externalMax !== undefined 
    ? [externalMin, externalMax] 
    : internalRange;

  return (
    <div className="days-slider">
      <div className="track" />
      <div
        className="range"
        style={{
          left: `${percent(min)}%`,
          width: `${percent(max) - percent(min)}%`,
        }}
      />

      <input
        type="range"
        min={MIN}
        max={MAX}
        value={min}
        onChange={(e) =>
          update(Math.min(+e.target.value, max - 1), max)
        }
      />

      <input
        type="range"
        min={MIN}
        max={MAX}
        value={max}
        onChange={(e) =>
          update(min, Math.max(+e.target.value, min + 1))
        }
      />
    </div>
  );
};

export default DaysRangeSlider;
