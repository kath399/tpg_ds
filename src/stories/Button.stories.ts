import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import { Button } from '../components/Button';
import { within, userEvent } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Core/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    mode: 'primary',
    label: 'Button',
    state: 'default',
    size: 'small',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=2699-45109&mode=design&t=rJ1y09iN25QXyGJz-4"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primarybutton = canvas.getByRole('button');
    await userEvent.click(primarybutton);
  },
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    label: 'Button',
    state: 'default',
    size: 'small',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-11&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const secondarybutton = canvas.getByRole('button');
    await userEvent.click(secondarybutton);
  },
};

export const Tertiary: Story = {
  args: {
    mode: 'tertiary',
    label: 'Button',
    state: 'default',
    size: 'small',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-12&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tertiarybutton = canvas.getByRole('button');
    await userEvent.click(tertiarybutton);
  },
};

export const Success: Story = {
  args: {
    mode: 'success',
    label: 'Button',
    state: 'default',
    size: 'small',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8Z2Q5HyARcGjoxggaFmKj9/tpg_ds?type=design&node-id=1-12&mode=design&t=TgAL9m8lSO4geoc9-4"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const successbutton = canvas.getByRole('button');
    await userEvent.click(successbutton);
  },
};