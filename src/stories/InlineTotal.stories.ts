import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import { InlineTotal } from '../components/InlineTotal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/InlineTotal',
  component: InlineTotal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof InlineTotal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
  }
};