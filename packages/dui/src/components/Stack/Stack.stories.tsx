import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    reverse: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const StackItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100 p-4">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <StackItem>1</StackItem>
        <StackItem>2</StackItem>
        <StackItem>3</StackItem>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    children: (
      <>
        <StackItem>1</StackItem>
        <StackItem>2</StackItem>
        <StackItem>3</StackItem>
      </>
    ),
  },
};

export const LargeSpacing: Story = {
  args: {
    spacing: 'xl',
    children: (
      <>
        <StackItem>1</StackItem>
        <StackItem>2</StackItem>
        <StackItem>3</StackItem>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    align: 'center',
    children: (
      <>
        <StackItem>1</StackItem>
        <StackItem>2</StackItem>
        <StackItem>3</StackItem>
      </>
    ),
  },
};

export const Stretched: Story = {
  args: {
    align: 'stretch',
    children: (
      <>
        <StackItem>1</StackItem>
        <StackItem>2</StackItem>
        <StackItem>3</StackItem>
      </>
    ),
  },
};

export const Reversed: Story = {
  args: {
    reverse: true,
    children: (
      <>
        <StackItem>1</StackItem>
        <StackItem>2</StackItem>
        <StackItem>3</StackItem>
      </>
    ),
  },
};
