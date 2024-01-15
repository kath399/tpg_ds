import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import Accordion from '../components/Accordion';

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
    
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NoBase: Story = {
  args: {

  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1381-54470&mode=dev"
    }
  }
};

export const WithBase: Story = {
  args: {

  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-11&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  }
};

export const List: Story = {
  args: {

  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-12&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  }
};

export const PlanCard: Story = {
  args: {

  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-12&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  }
};