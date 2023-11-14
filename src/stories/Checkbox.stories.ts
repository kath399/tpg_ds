import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

const meta = {
  title: 'Core/Core/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = { 
  args: {
    mode: 'selected',
    checked: true,
    label: 'Checkbox',
    state: 'enable',
  },
  parameters: {
    design: {
      type: "figma",
      url: "" // insert url 
    }
  }
};

export const Unselected: Story = { 
  args: {
    mode: 'unselected',
    checked: false,
    label: 'Checkbox',
    state: 'enable',
  },
  parameters: {
    design: {
      type: "figma",
      url: "" // insert url 
    }
  }
};
  