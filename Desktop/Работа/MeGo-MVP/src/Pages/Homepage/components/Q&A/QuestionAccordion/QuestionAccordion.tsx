import { useState } from "react";
import "./QuestionAccordion.css";

interface QuestionAccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

export const QuestionAccordion = ({
  question,
  answer,
  defaultOpen = false,
  className,
}: QuestionAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className="Qroot"
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <div className="Qcontent">
        <div className="Qheader" onClick={toggle}>
          <div className="Qquestion">{question}</div>

          <div className="arrowWrapper">
            <svg
             className={`arrow ${isOpen ? "open" : ""}`}
              width="24"
              height="12"
              viewBox="0 0 24 12"
              fill="none"
            >
              <path
                d="M2 2L12 10L22 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={`Qanswer ${isOpen ? "open" : ""}`}>{answer}</div>
      </div>
    </div>
  );
};
