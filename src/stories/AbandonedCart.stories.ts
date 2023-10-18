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

export const Recognised: Story = {
  args: {
    mode: 'primary',
    buttonlabel: 'Button',
    viewport: 'desktop'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1416-33900&mode=design&t=rJ1y09iN25QXyGJz-4"
    }
  }
};

export const Unrecognised: Story = {
    args: {
      mode: 'primary',
      buttonlabel: 'Button',
      viewport: 'desktop'
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1416-33900&mode=design&t=rJ1y09iN25QXyGJz-4"
      }
    }
  };