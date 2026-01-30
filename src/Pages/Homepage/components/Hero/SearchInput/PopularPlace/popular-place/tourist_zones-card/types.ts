export type TouristZoneCardProps = {
  /**
   * Название туристической зоны
   */
  name: string;

  /**
   * Описание туристической зоны
   */
  description: string;

  /**
   * Обработчик клика
   */
  onClick?: () => void;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
};
