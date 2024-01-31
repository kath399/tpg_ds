import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Core/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Size: {
      options: ['Large', 'Small'],
      control: 'radio'
    },
    State: { 
      options: ['Enable', 'Filled', 'Active', 'Error'],
      control: 'radio'
    }
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    Size: 'Large',
    State: 'Enabled',
    ShowTooltipIcon: true,
    ShowSupportingText: false,
    SupportText: 'Support Text',
    Label: 'Label',
    ShowErrorText: false,
    ErrorText: 'Error Text'
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?type=design&node-id=5594-90640&mode=dev"
    }
  },

  play: async ({ canvasElement }) => {
    
  },
};