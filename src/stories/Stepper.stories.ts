import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import Stepper from '../components/Stepper';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const StepperStates: Story = {
  args: {
    steps: ['Step 1'],
    state: 'active'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=2226-37040&mode=design&t=VshpM2wGESQN1OkX-4"
    }
  }
};

export const StepPositions: Story = {
  args: {
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    state: 'active'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=2230-41416&mode=design&t=VshpM2wGESQN1OkX-4"
    }
  }
};