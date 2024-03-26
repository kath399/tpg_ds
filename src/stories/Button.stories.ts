import type { Meta, StoryObj } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import { Button } from '../components/Button';
import { string } from 'prop-types';
import { within, userEvent } from '@storybook/testing-library';
import { actions } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Button',
  component: Button,
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
    //backgroundColor: { control: 'color' }, 
    Inverse: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    Size: 'Large',
    Colour: 'Primary', 
    State: 'Enabled', 
    Inverse: false,
    Text: 'Button', 
    ShowLeftIcon: false,
    ShowRightIcon: false,
    ShowLoadingIcon: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?node-id=5587%3A16583&mode=dev"
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primarybutton = canvas.getByRole('button');

    //conditionally trigger click event after a delay (for demonstration purposes) -- CHECK WITH TEAM 
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    //await userEvent.click(Primarybutton);
    await userEvent.click(primarybutton);
  },
};

export const Secondary: Story = {
  args: {
    Size: 'Large',
    Colour: 'Secondary', 
    State: 'Enabled', 
    Inverse: false,
    Text: 'Button', 
    ShowLeftIcon: false,
    ShowRightIcon: false,
    ShowLoadingIcon: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?node-id=6044%3A2863&mode=dev"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const secondarybutton = canvas.getByRole('button');
    
  },
};

export const Tertiary: Story = {
  args: {
    Size: 'Large',
    Colour: 'Tertiary', 
    State: 'Enabled', 
    Inverse: false,
    Text: 'Button', 
    ShowLeftIcon: false,
    ShowRightIcon: false,
    ShowLoadingIcon: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?node-id=5587%3A16577&mode=dev"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tertiarybutton = canvas.getByRole('button');
    await userEvent.click(tertiarybutton);
  },
};

export const Link: Story = {
  args: {
    Size: 'Large',
    Colour: 'Link', 
    State: 'Enabled', 
    Inverse: false,
    Text: 'Button', 
    ShowLeftIcon: false,
    ShowRightIcon: false,
    ShowLoadingIcon: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Xl129GKsg3kTgKt6spkUM5/2.1-Web-Core?node-id=5587%3A16580&mode=dev"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const linkbutton = canvas.getByRole('button');
    await userEvent.click(linkbutton);
  },
};