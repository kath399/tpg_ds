import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/Divider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Divider',
  component: Divider,
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
    Colour: {
        options: ['LightGrey', 'MidGrey', 'Success', 'Incomplete', 'Dash', 'DarkGrey'],
        control: 'radio'
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: { 
    Colour: 'LightGrey'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5471-36613&mode=dev'
    },
  },
};
