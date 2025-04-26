import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-20 items-center justify-center rounded-lg bg-gray-100 p-4">{children}</div>
);

export const Default: Story = {
  args: {
    columns: 3,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
      </>
    ),
  },
};

export const LargeGap: Story = {
  args: {
    columns: 3,
    gap: 'xl',
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    columns: 3,
    align: 'center',
    justify: 'center',
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
      </>
    ),
  },
};

export const Stretched: Story = {
  args: {
    columns: 2,
    align: 'stretch',
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
      </>
    ),
  },
};
