import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Core/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    label: 'Label',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    error: false,
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1625-43135&mode=design&t=akqgfJpMVbhZwpO0-4"
    }
  },

  play: async ({ canvasElement }) => {
    
  },
};