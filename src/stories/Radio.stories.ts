import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../components/Radio';
import { within, userEvent } from '@storybook/testing-library';

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
        Label: ['Button Label'],
        Checked: true,
        numberOfBtns: 1,
        State: 'enable',
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5915-715&mode=design&t=tMCJiBlFOTqX0r9d-4"
      },
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const checkedRadioButton = canvas.getByRole('radio', {checked: true});
      await userEvent.click(checkedRadioButton);
    }
}

export const Unchecked: Story = {
  args: {
      Label: ['Button Label'],
      numberOfBtns: 1,
      State: 'enable',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5915-721&mode=design&t=tMCJiBlFOTqX0r9d-4"
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const uncheckedRadioButton = canvas.getByRole('radio', {checked: false});
    const nameInput = canvas.getByLabelText('Button Label', {
      selector: 'input',
    });
  }
}

export const Inline: Story = {
  args: {
      Label: ['Button Label 1', 'Button Label 2', 'Button Label 3', 'Button Label 4', 'Button Label 5'],
      numberOfBtns: 5,
      Inline: true,
      State: 'enable',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5945-3821&mode=design&t=tMCJiBlFOTqX0r9d-4"
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkedRadioButton = canvas.getByLabelText('Button Label 1');
    await userEvent.click(checkedRadioButton);
  }
}

export const Stacked: Story = {
  args: {
      Label: ['Button Label 1', 'Button Label 2', 'Button Label 3', 'Button Label 4', 'Button Label 5'],
      numberOfBtns: 5,
      State: 'enable',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5945-3820&mode=design&t=tMCJiBlFOTqX0r9d-4"
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkedRadioButton = canvas.getByLabelText('Button Label 1');
    const uncheckedRadioButton = canvas.getByLabelText('Button Label 2');
    await userEvent.click(checkedRadioButton);
    await userEvent.click(uncheckedRadioButton, {delay: 1000});
  }
}