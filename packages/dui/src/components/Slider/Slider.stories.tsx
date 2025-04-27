import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
  title: 'Inputs/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};

export const WithLabel: Story = {
  args: {
    defaultValue: [50],
    label: 'Volume',
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
};

export const WithStepMarks: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 10,
    showMarks: true,
  },
};

export const WithValueIndicator: Story = {
  args: {
    defaultValue: [50],
    showValue: true,
  },
};

export const CustomValueFormat: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    showValue: true,
    formatValue: (value) => `${value}%`,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-8">
      <div>
        <h4 className="mb-2 text-sm">Small</h4>
        <Slider size="sm" defaultValue={[30]} />
      </div>
      <div>
        <h4 className="mb-2 text-sm">Medium (Default)</h4>
        <Slider size="md" defaultValue={[50]} />
      </div>
      <div>
        <h4 className="mb-2 text-sm">Large</h4>
        <Slider size="lg" defaultValue={[70]} />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-8">
      <div>
        <h4 className="mb-2 text-sm">Default</h4>
        <Slider variant="default" defaultValue={[50]} />
      </div>
      <div>
        <h4 className="mb-2 text-sm">Gradient</h4>
        <Slider variant="gradient" defaultValue={[50]} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [30],
    disabled: true,
  },
};

export const MinMax: Story = {
  args: {
    defaultValue: [0],
    min: -50,
    max: 50,
    showValue: true,
  },
};

export const CustomStep: Story = {
  args: {
    defaultValue: [25],
    min: 0,
    max: 100,
    step: 25,
    showMarks: true,
    showValue: true,
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: '200px' }}>
      <Slider orientation="vertical" defaultValue={[50]} showMarks showValue />
    </div>
  ),
};

export const VerticalRange: Story = {
  render: () => (
    <div style={{ height: '200px' }}>
      <Slider orientation="vertical" defaultValue={[25, 75]} showMarks showValue />
    </div>
  ),
};
