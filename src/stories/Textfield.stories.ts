import type { Meta, StoryObj } from '@storybook/react';
import { Textfield } from '../components/Textfield';
import { userEvent, within } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Textfield',
  component: Textfield,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        id: 'Simple',
        complex: false,
        state: 'enabled',
        label: 'Label',
        error: false,
        errortext: 'Error',
    },
    
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"
        }
    },
}

export const Active: Story = {
  args: {
      id: 'Simple',
      complex: false,
      state: 'enabled',
      label: 'Label',
      error: false,
      errortext: 'Error',
  },
  
  parameters: {
      design: {
          type: "figma",
          url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"
      }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText('Label', {
      selector: 'input',
    });

    await userEvent.type(nameInput, 'User Input', {
      delay: 100
    });

  },
}

export const Disabled: Story = {
  args: {
      id: 'Simple',
      complex: false,
      state: 'disabled',
      label: 'Label',
      error: false,
      errortext: 'Error',
  },
  
  parameters: {
      design: {
          type: "figma",
          url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"
      }
  },
}

export const Complex: Story = {
    args: {
        id: 'Active',
        complex: true,
        state: 'enabled',
        label: 'Label',
        error: false
    },

    parameters: {
      design: {
        type: 'figma',
        url:"https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=894-32414&mode=design&t=Lx4uU7loBvdsJPIU-4"
      }
    },

    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const nameInput = canvas.getByLabelText('Label', {
        selector: 'input',
      });
  
      await userEvent.type(nameInput, 'List item', {
        delay: 100
      });
  

    },
}