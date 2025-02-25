import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CustomButton from '../components/Button';
import { ButtonVariantEnum, IconPlacementEnum } from '../types/styles';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonVariantEnum),
    },
    iconPlacement: {
      control: 'select',
      options: Object.values(IconPlacementEnum),
    },
    width: {
      control: 'number',
    },
    onClick: { action: 'clicked' }, // Use action to show clicks in the Actions panel
    to: {control: 'text'}
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    variant: ButtonVariantEnum.primary,
    label: 'Primary Button',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariantEnum.secondary,
    label: 'Secondary Button',
    onClick: fn(),
  },
};

export const Minimal: Story = {
  args: {
    variant: ButtonVariantEnum.minimal,
    label: 'Minimal Button',
    onClick: fn(),
  },
};

export const Error: Story = {
  args: {
    variant: ButtonVariantEnum.error,
    label: 'Error Button',
    onClick: fn(),
  },
};

export const MinimalError: Story = {
  args: {
    variant: ButtonVariantEnum.minimalError,
    label: 'Minimal Error Button',
    onClick: fn(),
  },
};

export const WithIconLeft: Story = {
  args: {
    variant: ButtonVariantEnum.primary,
    label: 'Icon Left',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
    iconPlacement: IconPlacementEnum.LEFT,
    onClick: fn(),
  },
};

export const WithIconRight: Story = {
  args: {
    variant: ButtonVariantEnum.secondary,
    label: 'Icon Right',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
    iconPlacement: IconPlacementEnum.RIGHT,
    onClick: fn(),
  },
};

export const CustomWidth: Story = {
  args: {
    variant: ButtonVariantEnum.minimal,
    label: 'Custom Width',
    width: 300,
    onClick: fn(),
  },
};

export const SubmitButton: Story = {
  args: {
    variant: ButtonVariantEnum.primary,
    label: "Submit",
    type: "submit",
    onClick: fn(),
  }
}

export const NavigateButton: Story = {
  args: {
    variant: ButtonVariantEnum.secondary,
    label: "Navigate",
    to: "/some/path",
    onClick: fn(),
  }
}