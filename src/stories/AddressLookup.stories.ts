import type { Meta, StoryObj } from '@storybook/react';
import { AddressLookup } from '../components/AddressLookup';
import { userEvent, within } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AddressLookup',
  component: AddressLookup,
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
} satisfies Meta<typeof AddressLookup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        errorAddress: false
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
  
      await userEvent.type(nameInput, 'user input text', {
        delay: 100,
      });

    },
}