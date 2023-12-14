import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../components/Radio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Radio Button',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
    args: {
        id: '',
        name: 'Button',
        label: ['Button Label'],
        checked: true,
        numberOfBtns: 1,
        value: '',
        disabled: false,
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5915-715&mode=design&t=tMCJiBlFOTqX0r9d-4"
      },
    },
}

export const Unchecked: Story = {
  args: {
      id: '',
      name: 'Button',
      label: ['Button Label'],
      numberOfBtns: 1,
      value: '',
      disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5915-721&mode=design&t=tMCJiBlFOTqX0r9d-4"
    },
  },
}

export const Inline: Story = {
  args: {
      id: '',
      name: 'Button',
      label: ['Button Label 1', 'Button Label 2', 'Button Label 3', 'Button Label 4', 'Button Label 5'],
      value: '',
      numberOfBtns: 5,
      inline: true,
      disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5945-3821&mode=design&t=tMCJiBlFOTqX0r9d-4"
    },
  },
}

export const Stacked: Story = {
  args: {
      id: '',
      name: 'Button',
      label: ['Button Label 1', 'Button Label 2', 'Button Label 3', 'Button Label 4', 'Button Label 5'],
      value: '',
      numberOfBtns: 5,
      disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5945-3820&mode=design&t=tMCJiBlFOTqX0r9d-4"
    },
  },
}