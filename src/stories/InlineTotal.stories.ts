import type { Meta, StoryObj } from '@storybook/react';
import { InlineTotal } from '../components/InlineTotal';
import { within, userEvent } from '@storybook/testing-library';
//import { expect } from '@storybook/jest';

const meta = {
  title: 'Core/Deprecated/InlineTotal',
  component: InlineTotal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof InlineTotal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headline: 'Headline',
    amount: 0
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=2643-48991&mode=design&t=vA7BDRmCEz035JKs-4"
    }
  },
};