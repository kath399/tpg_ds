import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import { AbandonedCart } from '../components/AbandonedCart';

const meta = {
  title: 'Components/AbandonedCart',
  component: AbandonedCart,
  parameters: {
    
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof AbandonedCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: 'primary',
    label: 'Button',
    viewport: 'desktop'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-10&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  }
};