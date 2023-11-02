import type { Meta, StoryObj } from '@storybook/react';
import { StickyCart } from '../components/StickyCart';
import { within, userEvent } from '@storybook/testing-library';
//import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/StickyCart',
  component: StickyCart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof StickyCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {

  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1473-39034&mode=design&t=Lx4uU7loBvdsJPIU-4"
    }
  },

  play: async ({ canvasElement }) => {
    
  },
};