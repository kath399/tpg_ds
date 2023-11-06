import type { Meta, StoryObj } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { AbandonedCart } from '../components/AbandonedCart';

const meta = {
  title: 'Components/AbandonedCart',
  component: AbandonedCart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `<div><strong>Overview:</strong> Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off. 
          They’re a kind of selection control that helps users make a choice from a set of options.</div> <br /> <div>

          <strong>Guidelines:</strong> Single-line fields, as the cursor reaches the right field edge, 
          text longer than the input line automatically scrolls left. Text areas are fixed-height fields</div> <br /> <div>
          
          <strong>Related Components:</strong> N/A</div> <br /> <div>
          
          <strong>Properties:</strong> (Name, Required, Type, Default & Description)</div>
        `,
      },
    }
  },
  tags: ['autodocs'],
  argTypes: {
    singleItem: { control: 'boolean' }
  },
} satisfies Meta<typeof AbandonedCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Recognised: Story = {
  args: {
    //viewport: 'desktop',
    items: 2,
    number: '04XX XXX 246',
    singleItem: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1416-33895&mode=design&t=fsDgVHmmAGHmcbEu-4"
    }
  }
};

export const Unrecognised: Story = {
  args: {
    //viewport: 'desktop',
    items: 2,
    singleItem: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=1416-33891&mode=design&t=fsDgVHmmAGHmcbEu-4"
    }
  }
};
