import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    truncate: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Default Heading',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading size="xs">Extra Small Heading</Heading>
      <Heading size="sm">Small Heading</Heading>
      <Heading size="base">Base Heading</Heading>
      <Heading size="lg">Large Heading</Heading>
      <Heading size="xl">Extra Large Heading</Heading>
      <Heading size="2xl">2XL Heading</Heading>
      <Heading size="3xl">3XL Heading</Heading>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading weight="normal">Normal Weight</Heading>
      <Heading weight="medium">Medium Weight</Heading>
      <Heading weight="semibold">Semibold Weight</Heading>
      <Heading weight="bold">Bold Weight</Heading>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading align="left">Left Aligned Heading</Heading>
      <Heading align="center">Center Aligned Heading</Heading>
      <Heading align="right">Right Aligned Heading</Heading>
    </div>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div className="w-64">
      <Heading truncate>
        This is a very long heading that will be truncated because it exceeds the container width
      </Heading>
    </div>
  ),
};

export const AsElement: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
    </div>
  ),
};
