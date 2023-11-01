import type { Meta, StoryObj } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { AbandonedCart } from '../components/AbandonedCart';

const meta = {
  title: 'Components/AbandonedCart',
  component: AbandonedCart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    singleItem: { control: 'boolean' }
  },
} satisfies Meta<typeof AbandonedCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Recognised: Story = {
  args: {
    //viewport: 'desktop',
    items: 2,
    number: '04XX XXX 246',
    singleItem: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1416-33895&mode=design&t=fsDgVHmmAGHmcbEu-4"
    }
  }
};

export const Unrecognised: Story = {
  args: {
    //viewport: 'desktop',
    items: 2,
    singleItem: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1416-33891&mode=design&t=fsDgVHmmAGHmcbEu-4"
    }
  }
};
