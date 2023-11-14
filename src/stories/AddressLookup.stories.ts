import type { Meta, StoryObj } from '@storybook/react';
import { AddressLookup } from '../components/AddressLookup';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Features/Cart & Checkout/Address Lookup',
  component: AddressLookup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddressLookup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        errorAddress: false,
        addresses: ['List item 1', 'List item 2', 'List item 3', 'List item 4']
    },
    
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"
        }
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const nameInput = canvas.getByLabelText('Home Address', {
        selector: 'input',
      });
  
      await userEvent.type(nameInput, '12 ouhouahenj', {
        delay: 100,
      });

      /*
      await expect(
        canvas.getByText(
          'Unfortunately'
        )
      ).toBeInTheDocument();*/

    },
}