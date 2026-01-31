import type { Meta, StoryObj } from '@storybook/react';
import { PopularPlace } from '..';

const meta: Meta<typeof PopularPlace> = {
  title: 'Components/PopularPlace',
  component: PopularPlace,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Восхождение на Хан-Тенгри (14 дней)',
    price: 'от 1 250 000 〒',
    name: 'Турбаза «Жумбактас»',
    description: 'Описание краткое',
  },
};
