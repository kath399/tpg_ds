import type { Meta, StoryObj } from '@storybook/react';
import { Filter } from '../components/Filter';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Filter',
  component: Filter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    mode: 'primary',
    Label: 'Label'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=2675-45428&mode=design&t=lOzv2g3kBBBHgZko-4"
    }
  }
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    Label: 'Label',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-11&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  }
};