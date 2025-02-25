import type { Meta, StoryObj } from '@storybook/react';
import { Title, TitleSizes, TitleColors } from '../components/Title'; 

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(TitleSizes),
    },
    color: {
      control: 'select',
      options: Object.values(TitleColors),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const BigTitle: Story = {
  args: {
    size: TitleSizes.BIG,
    color: TitleColors.BLACK,
    label: 'Big Title',
  },
};

export const MediumTitle: Story = {
  args: {
    size: TitleSizes.MEDIUM,
    color: TitleColors.GREEN,
    label: 'Medium Title',
  },
};

export const SmallTitle: Story = {
  args: {
    size: TitleSizes.SMALL,
    color: TitleColors.RED,
    label: 'Small Title',
  },
};

export const WhiteTitle: Story = {
  args: {
    size: TitleSizes.MEDIUM,
    color: TitleColors.WHITE,
    label: 'White Title',
  },
};