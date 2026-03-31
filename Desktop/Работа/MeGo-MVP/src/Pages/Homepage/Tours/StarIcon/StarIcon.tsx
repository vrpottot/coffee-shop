import { useState } from "react";
import type { StarIconProps } from "./types";
import defaultStar from "./DefaultStar.svg";
import hoverStar from "./HoverStar.svg";
import pressedStar from "./PressedStar.svg";
import "./StarIcon.css";

export const StarIcon = ({
  initialActive = false,
  onToggle,
}: StarIconProps) => {
  const [active, setActive] = useState(initialActive);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const next = !active;
    setActive(next);
    onToggle?.(next);
  };

  const iconSrc = active
    ? pressedStar
    : hovered
    ? hoverStar
    : defaultStar;

  return (
    <button
      className="starIcon"
      type="button"
      aria-pressed={active}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={iconSrc} alt="Add to favorites" />
    </button>
  );
};
