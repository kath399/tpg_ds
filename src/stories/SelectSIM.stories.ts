import type { Meta, StoryObj } from '@storybook/react';
import { SelectSIM } from '../components/SelectSIM';
import { within, userEvent } from '@storybook/testing-library';
//import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/SelectSIM',
  component: SelectSIM,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof SelectSIM>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    dropdown: false
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=4772-21385&mode=design&t=SwO6LBUYUbUipDQ0-4"
    }
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const PhysicalButton = canvas.getByRole('button', {
        name: 'Physical SIM'
    });
    await userEvent.click(PhysicalButton);
    const eSIMButton = canvas.getByRole('button', {
        name: 'Yes I want to use an eSIM'
    });
    
    await userEvent.click(eSIMButton);
  },
};

export const Dropdown: Story = {
  args: {
    dropdown: true
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=4772-21383&mode=design&t=akqgfJpMVbhZwpO0-4"
    }
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const PhysicalButton = canvas.getByRole('button', {
        name: 'Physical SIM'
    });
    await userEvent.click(PhysicalButton);
    const eSIMButton = canvas.getByRole('button', {
        name: 'Yes I want to use an eSIM'
    });
    
    await userEvent.click(eSIMButton);
  },
};