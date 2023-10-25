import type { Meta, StoryObj } from '@storybook/react';
import { Textfield } from '../components/Textfield';
import { userEvent, within } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Textfield',
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

export const Default: Story = {
    args: {
        id: 'Default',
        status: 'default',
        label: 'Name:',
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const nameInput = canvas.getByLabelText('Name:', {
        selector: 'input',
      });
  
      await userEvent.type(nameInput, 'name', {
        delay: 100,
      });
      
      const submitButton = canvas.getByRole('button');
  
      await userEvent.click(submitButton);
    },
}

export const Active: Story = {
    args: {
        id: 'Active',
        status: 'active',
        label: 'Text: ',
    },
}