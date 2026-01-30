import type { Meta, StoryObj } from '@storybook/react';
import { CountPeople } from '..';

const meta: Meta<typeof CountPeople> = {
  title: 'Components/CountPeople',
  component: CountPeople,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок блока',
    },
    subtitle: {
      control: 'text',
      description: 'Подзаголовок (возраст / описание)',
    },
    count: {
      control: 'number',
      description: 'Текущее количество',
    },
    min: {
      control: 'number',
      description: 'Минимальное значение',
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
    },
    onIncrement: {
      action: 'increment',
      description: 'Увеличить значение',
    },
    onDecrement: {
      action: 'decrement',
      description: 'Уменьшить значение',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Взрослые',
    subtitle: ' 16 лет',
    count: 0,
    min: 0,
    max: 100,
  },
};
