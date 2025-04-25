import type {Meta, StoryObj} from '@storybook/react';
import {Flex} from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const FlexItem = ({children}: {children: React.ReactNode}) => (
  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100 p-4">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </>
    ),
  },
};

export const Wrapped: Story = {
  args: {
    wrap: 'wrap',
    children: (
      <>
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
        <FlexItem>4</FlexItem>
        <FlexItem>5</FlexItem>
        <FlexItem>6</FlexItem>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    align: 'center',
    justify: 'center',
    children: (
      <>
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </>
    ),
  },
};

export const Between: Story = {
  args: {
    justify: 'between',
    children: (
      <>
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </>
    ),
  },
};

export const Stretched: Story = {
  args: {
    align: 'stretch',
    children: (
      <>
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </>
    ),
  },
};
