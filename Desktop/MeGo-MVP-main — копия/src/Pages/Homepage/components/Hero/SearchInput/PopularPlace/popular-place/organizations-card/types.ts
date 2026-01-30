export type GuideCardProps = {
  /**
   * Название организации
   */
  organizationName: string;

  /**
   * Описание деятельности организации
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
