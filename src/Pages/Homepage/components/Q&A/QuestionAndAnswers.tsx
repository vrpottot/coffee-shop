import { QuestionAccordion } from "./QuestionAccordion/QuestionAccordion";
import { ContactBox } from "./ConactBox/ConactBox";
import "./QuestionAndAnswers.css";
interface QuestionAndAnswersProps {
  title?: string;
  moreLink?: string;
  className?: string;
}

const QUESTIONS = [
  {
    question: "Подходит ли Казахстан для путешествий зимой?",
    answer:
      "Да, но важно выбрать направление. Зимой популярны горнолыжные курорты (Шымбулак), зимние туры в Бурабай и городские поездки. Для каньонов и треккинга лучше тёплый сезон",
  },
  {
    question: "Подходит ли Казахстан для путешествий зимой?",
    answer:
      "Да, но важно выбрать направление. Зимой популярны горнолыжные курорты (Шымбулак), зимние туры в Бурабай и городские поездки. Для каньонов и треккинга лучше тёплый сезон",
  },
  {
    question: "Подходит ли Казахстан для путешествий зимой?",
    answer:
      "Да, но важно выбрать направление. Зимой популярны горнолыжные курорты (Шымбулак), зимние туры в Бурабай и городские поездки. Для каньонов и треккинга лучше тёплый сезон",
  },
];

export const QuestionAndAnswers = ({
  title = "Вопросы и ответы",
  moreLink = "Смотреть все",
  className,
}: QuestionAndAnswersProps) => {
  return (
    <section className="QAroot">
      <h2 className="QAtitle">{title}</h2>

      <div className="QAcontent">
        <div className="qa">
          <div className="QAlist">
            {QUESTIONS.map((item, index) => (
              <QuestionAccordion
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <a href="#" className="moreLink">
            {moreLink}
          </a>
        </div>

      
          <div className="contactBoxContainer">
            <ContactBox
              className="contactBox"
              onClick={() => {}}
              title="Остались вопросы?"
              description="Напишите нам. Мы ответим в течение 10 минут."
            />
          </div>
  
      </div>
    </section>
  );
};