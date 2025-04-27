import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircular } from './ProgressCircular';

const meta = {
  title: 'Feedback/ProgressCircular',
  component: ProgressCircular,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressCircular>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const CustomLabel: Story = {
  args: {
    value: 80,
    showLabel: true,
    label: 'Loading...',
  },
};

export const FormatLabel: Story = {
  args: {
    value: 42,
    showLabel: true,
    formatLabel: (value) => `${value.toFixed(1)}%`,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ProgressCircular value={65} color="primary" showLabel />
      <ProgressCircular value={65} color="secondary" showLabel />
      <ProgressCircular value={65} color="success" showLabel />
      <ProgressCircular value={65} color="warning" showLabel />
      <ProgressCircular value={65} color="error" showLabel />
      <ProgressCircular value={65} color="info" showLabel />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ProgressCircular value={65} size="sm" showLabel />
      <ProgressCircular value={65} size="md" showLabel />
      <ProgressCircular value={65} size="lg" showLabel />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div className="flex gap-4">
      <ProgressCircular value={65} thickness={2} showLabel />
      <ProgressCircular value={65} thickness={4} showLabel />
      <ProgressCircular value={65} thickness={6} showLabel />
    </div>
  ),
};

export const IndeterminateWithColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ProgressCircular indeterminate color="primary" />
      <ProgressCircular indeterminate color="secondary" />
      <ProgressCircular indeterminate color="success" />
      <ProgressCircular indeterminate color="warning" />
      <ProgressCircular indeterminate color="error" />
      <ProgressCircular indeterminate color="info" />
    </div>
  ),
};
