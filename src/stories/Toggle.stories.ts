import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components/Toggle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Toggle',
  component: Toggle,
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
    State: {
      options: ['Active', 'Focus', 'Disabled'],
      control: 'radio' 
    }, 
    Type: {
        options: ['No icon', 'With icon'],
        control: 'radio'
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NoIcon: Story = {
  args: { 
    Type: 'No icon',
    OnOff: true,
    State: 'Active',
    ShowLabel: true,
    Label: 'Toggle label'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=6139-2413&mode=dev'
    },
  },
};

export const WithIcon: Story = {
    args: { 
        Type: 'With icon',
        OnOff: true,
        State: 'Active',
        ShowLabel: true,
        Label: 'Toggle label'
    },
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=6139-2413&mode=dev'
      },
    },
  };
  