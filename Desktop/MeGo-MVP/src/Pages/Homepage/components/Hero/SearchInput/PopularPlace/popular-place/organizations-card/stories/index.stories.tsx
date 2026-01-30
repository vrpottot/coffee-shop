import type { Meta, StoryObj } from '@storybook/react';
import { GuideCard } from '..';

const meta: Meta<typeof GuideCard> = {
  title: 'Components/PopularPlace/OrganizationsCard',
  component: GuideCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    organizationName: {
      control: { type: 'text' },
      description: 'Название организации',
    },
    description: {
      control: { type: 'text' },
      description: 'Описание деятельности организации',
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
    organizationName: 'ТОО "Хан-Торе"',
    description: 'Организатор просмотра достопримечательностей',
  },
};
