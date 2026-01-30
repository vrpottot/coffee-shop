export type TourCardProps = {
  /**
   * Заголовок тура
   */
  title: string;

  /**
   * Цена тура
   */
  price: string;

  /**
   * Обработчик клика
   */
  onClick?: () => void;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
};
