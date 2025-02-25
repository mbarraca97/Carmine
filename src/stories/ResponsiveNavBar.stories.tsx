import type { Meta, StoryObj } from '@storybook/react';
import ResponsiveAppBar from '../components/ResponsiveAppBar'; 

const meta: Meta<typeof ResponsiveAppBar> = {
  title: 'Components/ResponsiveAppBar',
  component: ResponsiveAppBar,
  parameters: {
    layout: 'fullscreen', 
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResponsiveAppBar>;

export const Default: Story = {
  args: {},
};