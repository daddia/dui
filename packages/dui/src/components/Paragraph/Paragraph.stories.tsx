import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg'],
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
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a default paragraph with some text to demonstrate the component.',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph size="xs">
        Extra Small Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="sm">
        Small Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="base">
        Base Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="lg">
        Large Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph weight="normal">
        Normal Weight: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph weight="medium">
        Medium Weight: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph weight="semibold">
        Semibold Weight: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph weight="bold">
        Bold Weight: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph align="left">
        Left Aligned: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph align="center">
        Center Aligned: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph align="right">
        Right Aligned: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </div>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div className="w-64">
      <Paragraph truncate>
        This is a very long paragraph that will be truncated because it exceeds the container width.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </div>
  ),
};
