import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import { Accordion } from '../components/Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    Size: {
      options: ['Large', 'Medium', 'Small'],
      control: 'radio'
    }
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Single: Story = {
  args: {
    Size: 'Large',
    Type: 'Single',
    State: 'Collapsed',
    ShowLabelIcon: true,
    LabelText: 'Accordion Label',
    ShowTitle: true,
    TitleText: 'Title',
    BodyCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    TopDivider: true,
    BottomDivider: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1381-54470&mode=dev"
    }
  }
};

export const Multiple: Story = {
  args: {
    Size: 'Large',
    Type: 'Multiple',
    State: 'Collapsed',
    ShowLabelIcon: true,
    LabelText: 'Accordion Label',
    ShowTitle: true,
    TitleText: 'Title',
    BodyCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    TopDivider: true,
    BottomDivider: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-11&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  }
};