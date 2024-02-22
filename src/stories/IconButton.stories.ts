import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../components/IconButton';
import { within, userEvent } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Icon Button',
  component: IconButton,
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
        options: ['Default', 'Hover', 'Pressed', 'Disabled', 'Focus'],
        control: 'radio'
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: { 
    State: 'Default',
    Type: 'Primary',
    Size: 'Large'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5432-123932&mode=design&t=d3iFM7KTUOqUI6SP-4'
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const linkbutton = canvas.getByRole('button');
    await userEvent.click(linkbutton);
  },
};

export const Tertiary: Story = {
    args: { 
      State: 'Default',
      Type: 'Tertiary',
      Size: 'Large'
    },
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5432-123932&mode=design&t=d3iFM7KTUOqUI6SP-4'
      },
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const linkbutton = canvas.getByRole('button');
      await userEvent.click(linkbutton);
    },
  };
  