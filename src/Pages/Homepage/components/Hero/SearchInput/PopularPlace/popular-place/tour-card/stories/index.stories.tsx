import type { Meta, StoryObj } from '@storybook/react';
import { TourCard } from '..';

const meta: Meta<typeof TourCard> = {
  title: 'Components/PopularPlace/TourCard',
  component: TourCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Заголовок тура',
    },
    price: {
      control: { type: 'text' },
      description: 'Цена тура',
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика',
    },
    className: {
      control: { type: 'text' },
      description: 'Дополнительный CSS класс',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Восхождение на Хан-Тенгри (14 дней)',
    price: 'от 1 250 000 〒',
  },
};
