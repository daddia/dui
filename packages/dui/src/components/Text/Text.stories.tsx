import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'danger'],
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
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a default text',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="xs">Extra Small Text</Text>
      <Text size="sm">Small Text</Text>
      <Text size="base">Base Text</Text>
      <Text size="lg">Large Text</Text>
      <Text size="xl">Extra Large Text</Text>
      <Text size="2xl">2XL Text</Text>
      <Text size="3xl">3XL Text</Text>
      <Text size="4xl">4XL Text</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <Text weight="normal">Normal Weight</Text>
      <Text weight="medium">Medium Weight</Text>
      <Text weight="semibold">Semibold Weight</Text>
      <Text weight="bold">Bold Weight</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Text color="default">Default Color</Text>
      <Text color="muted">Muted Color</Text>
      <Text color="primary">Primary Color</Text>
      <Text color="success">Success Color</Text>
      <Text color="warning">Warning Color</Text>
      <Text color="danger">Danger Color</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4">
      <Text align="left">Left Aligned Text</Text>
      <Text align="center">Center Aligned Text</Text>
      <Text align="right">Right Aligned Text</Text>
    </div>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div className="w-64">
      <Text truncate>
        This is a very long text that will be truncated because it exceeds the container width
      </Text>
    </div>
  ),
};

export const AsElement: Story = {
  render: () => (
    <div className="space-y-4">
      <Text as="h1">Heading 1</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="span">Inline Text</Text>
      <Text as="div">Block Text</Text>
    </div>
  ),
};
