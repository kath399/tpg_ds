import type { Meta, StoryObj } from '@storybook/react';
//import { box } from '@storybook/addon-knobs';
import { Box } from '../components/Box';

const meta = {
    title: 'Components/Box',
    component: Box,
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
  } satisfies Meta<typeof Box>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  