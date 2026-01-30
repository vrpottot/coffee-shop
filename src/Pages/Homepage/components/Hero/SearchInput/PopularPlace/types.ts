export type TouristCardProps = {
  /**
   * Заголовок тура
   */
  title: string;

  /**
   * Цена тура
   */
  price: string;

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
};
