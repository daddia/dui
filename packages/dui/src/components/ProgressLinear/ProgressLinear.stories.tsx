import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressLinear } from './ProgressLinear';

const meta = {
  title: 'Feedback/ProgressLinear',
  component: ProgressLinear,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressLinear>;

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

export const LabelPositions: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <div>
        <h4 className="mb-2 text-sm font-medium">Label on top</h4>
        <ProgressLinear value={65} showLabel labelPosition="top" />
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium">Label on right</h4>
        <ProgressLinear value={65} showLabel labelPosition="right" />
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium">Label inside</h4>
        <ProgressLinear value={65} showLabel labelPosition="inside" thickness="lg" />
      </div>
    </div>
  ),
};

export const WithBuffer: Story = {
  args: {
    value: 35,
    buffer: 65,
    showLabel: true,
  },
};

export const CustomLabel: Story = {
  args: {
    value: 80,
    showLabel: true,
    label: 'Loading files...',
  },
};

export const FormatLabel: Story = {
  args: {
    value: 42,
    showLabel: true,
    formatLabel: (value) => `${value.toFixed(1)}% Complete`,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <ProgressLinear value={65} color="primary" showLabel />
      <ProgressLinear value={65} color="secondary" showLabel />
      <ProgressLinear value={65} color="success" showLabel />
      <ProgressLinear value={65} color="warning" showLabel />
      <ProgressLinear value={65} color="error" showLabel />
      <ProgressLinear value={65} color="info" showLabel />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <ProgressLinear value={65} thickness="xs" showLabel />
      <ProgressLinear value={65} thickness="sm" showLabel />
      <ProgressLinear value={65} thickness="md" showLabel />
      <ProgressLinear value={65} thickness="lg" showLabel />
    </div>
  ),
};

export const IndeterminateWithColors: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <ProgressLinear indeterminate color="primary" />
      <ProgressLinear indeterminate color="secondary" />
      <ProgressLinear indeterminate color="success" />
      <ProgressLinear indeterminate color="warning" />
      <ProgressLinear indeterminate color="error" />
      <ProgressLinear indeterminate color="info" />
    </div>
  ),
};

export const BufferWithColors: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <ProgressLinear value={30} buffer={70} color="primary" showLabel />
      <ProgressLinear value={30} buffer={70} color="secondary" showLabel />
      <ProgressLinear value={30} buffer={70} color="success" showLabel />
      <ProgressLinear value={30} buffer={70} color="warning" showLabel />
      <ProgressLinear value={30} buffer={70} color="error" showLabel />
      <ProgressLinear value={30} buffer={70} color="info" showLabel />
    </div>
  ),
};
