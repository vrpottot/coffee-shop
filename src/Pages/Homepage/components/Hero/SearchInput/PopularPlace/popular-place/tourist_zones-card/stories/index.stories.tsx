import type { Meta, StoryObj } from '@storybook/react';
import { TouristZoneCard } from '..';

const meta: Meta<typeof TouristZoneCard> = {
  title: 'Components/PopularPlace/TouristZoneCard',
  component: TouristZoneCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Название туристической зоны',
    },
    description: {
      control: { type: 'text' },
      description: 'Описание туристической зоны',
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
    name: 'Турбаза «Жумбактас»',
    description: 'Описание краткое',
  },
};
