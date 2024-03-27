import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../components/Chip';
import { within, userEvent } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Chip',
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'Default',
      values: [
        {
          name: 'Default',
          value: '#f2f2f2',
        },
        {
          name: 'Inverse',
          value: '#262626',
        },
      ],
    },
    docs: {
      description: {
        
      },
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' }, 
    State: {
        options: ['Default', 'Hover', 'Focus', 'Pressed'],
        control: 'radio'
    },
    
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Single: Story = {
  args: { 
    State: 'Default',
    Size: 'Large',
    LabelText: 'Label'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5832-8172&mode=dev'
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button');
    await userEvent.click(chip);
  },
};

export const Group: Story = {
  args: { 
    Size: 'Large',
    ShowChip02: true,
    ShowChip03: true,
    ShowChip04: true,
    ShowChip05: true,
    ShowChip06: true,
    Single: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5832-8288&mode=dev'
    },
  },
};