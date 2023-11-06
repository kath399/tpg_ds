import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import { Button } from '../components/Button';
import { string } from 'prop-types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `<div><strong>Overview:</strong> Buttons are clickable elements that allow users to interact with a page and make choices with a single tap. 
          They communicate different calls to action with each variant representing a different function and level of priority. 
          These variants must be used consistently across the product so that the message to the user remains clear and uniform.</div> <br /> <div>

          <strong>Guidelines:</strong> Button consists of a shape and a corresponding label, which describes the action that will occur.
          The button component has four appearances representing different functions and levels of priority. 
          Use them consistently across the screens and platforms to ensure a uniform message to the user. 
          Button and Button With Icon are merged into a single component - Button.</div> <br /> <div>
          
          <strong>Related Components:</strong> Back button, Link button</div> <br /> <div>
          
          <strong>Properties:</strong> (Name, Required, Type, Default & Description)</div>
        `,
      },
    }
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
  }
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
  }
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
  }
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
  }
};