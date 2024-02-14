import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../components/Alert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Alert',
  component: Alert,
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
    Size: {
        options: ['Desktop', 'Tablet', 'Mobile'],
        control: 'radio'
    },
    Type: {
        options: ['Stacked', 'Inline'],
        control: 'radio'
    },
    State: {
        options: ['Error', 'Warning', 'Success', 'Info'],
        control: 'radio'
    },
    ShowHeading: { control: 'boolean' },
    Heading: {control: 'text'},
    BodyText: {control: 'text'},
    CloseButton: { control: 'boolean' },
    Button: { control: 'boolean' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Stacked: Story = {
  args: { 
    Size: 'Desktop',
    Type: 'Stacked',
    State: 'Error',
    ShowHeading: true,
    Heading: 'Heading',
    BodyText: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    CloseButton: false,
    Button: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5922-4578&mode=design&t=zBMXTRGfyBJApw7n-4'
    },
  },
};


export const Inline: Story = {
  args: { 
    Size: 'Desktop',
    Type: 'Inline',
    State: 'Error',
    ShowHeading: true,
    Heading: 'Heading',
    BodyText: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    CloseButton: false,
    Button: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5922-4578&mode=design&t=zBMXTRGfyBJApw7n-4'
    },
  },
};
