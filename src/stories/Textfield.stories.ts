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
    State: { 
      options: ['Enabled', 'Focused', 'Active', 'Filled', 'Error', 'Disabled'],
      control: 'radio'
    }
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
      Type: 'Simple',
      Size: 'Large',
      State: 'Enabled',
      ShowLabel: true,
      LabelText: 'Label',
      ShowLeftIcon: false,
      ShowInputText: true,
      ShowRightIcon: false,
      InputText: '',
      ShowSupportingText: false,
      SupportingText: 'Support Text',
      ShowErrorText: false,
      ErrorText: 'Error Text'
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
    Type: 'Complex',
    Size: 'Large',
    State: 'Enabled',
    ShowLabel: true,
    LabelText: 'Label',
    ShowLeftIcon: false,
    ShowInputText: true,
    InputText: '',
    ShowRightIcon: false,
    ShowSupportingText: false,
    SupportingText: 'Support Text',
    ShowErrorText: false,
    ErrorText: 'Error Text'
  },
  
  parameters: {
      design: {
          type: "figma",
          url: "https://www.figma.com/file/BtunVVjUyt3jJvT40IYBg5/Vodafone-Components?type=design&node-id=896-28676&mode=design&t=Kf2VfR9SgOm0o792-4"
      }
  },
}