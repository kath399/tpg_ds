import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';
import { within, userEvent } from '@storybook/testing-library';

const meta = {
  title: 'Core/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    Checked: { control: 'boolean' },
    State: { 
      options: ['Enable', 'Hover', 'Focus', 'Disabled', 'Error'],
      control: 'radio'
    },
    ShowText: { control: 'boolean' },
    Text: { control: 'text' },
    ShowError: { control: 'boolean' },
    ErrorText: { control: 'text' },
    Single: { control: {disable: true } },
    Inline: { control: { disable: true } }
  },
} satisfies Meta<typeof Checkbox>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = { 
  args: {
    Checked: false,
    State: 'Enable',
    ShowText: true,
    Text: 'Checkbox',
    ShowError: false,
    ErrorText: 'Error Text',
    Single: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5594-88525&mode=dev"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primarybutton = canvas.getByRole('checkbox');
    await userEvent.click(primarybutton);
  },
};

export const Inline: Story = { 
  args: {
    Checked: false,
    State: 'Enable',
    ShowText: true,
    Text: 'Checkbox',
    ShowError: false,
    ErrorText: 'Error Text',
    Single: false,
    Inline: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5594-89739&mode=dev"
    }
  },
};

export const Stacked: Story = { 
  args: {
    Checked: false,
    State: 'Enable',
    ShowText: true,
    Text: 'Checkbox',
    ShowError: false,
    ErrorText: 'Error Text',
    Single: false,
    Inline: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5594-89741&mode=dev"
    }
  }
};
  