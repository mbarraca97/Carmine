import type { Meta, StoryObj } from '@storybook/react';
import { Label, LabelColors, LabelSizes } from '../components/Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(LabelSizes),
    },
    color: {
      control: 'select',
      options: Object.values(LabelColors),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const BigLabel: Story = {
  args: {
    size: LabelSizes.BIG,
    color: LabelColors.BLACK,
    label: 'Big Label',
  },
};

export const MediumLabel: Story = {
  args: {
    size: LabelSizes.MEDIUM,
    color: LabelColors.GREY,
    label: 'Medium Label',
  },
};

export const SmallLabel: Story = {
  args: {
    size: LabelSizes.SMALL,
    color: LabelColors.RED,
    label: 'Small Label',
  },
};

export const XSmallLabel: Story = {
  args: {
    size: LabelSizes.XSMALL,
    color: LabelColors.GREEN,
    label: 'XSmall Label',
  },
};

export const WhiteLabel: Story = {
  args: {
    size: LabelSizes.MEDIUM,
    color: LabelColors.WHITE,
    label: 'White Label',
  },
};