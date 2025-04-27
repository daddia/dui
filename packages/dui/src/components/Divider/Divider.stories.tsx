import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The thickness of the divider',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'destructive', 'muted'],
      description: 'The color of the divider',
    },
    withSpacing: {
      control: { type: 'boolean' },
      description: 'Whether to add margin before and after the divider',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    size: 'sm',
    color: 'default',
    withSpacing: false,
  },
};

export const WithSpacing: Story = {
  args: {
    orientation: 'horizontal',
    size: 'sm',
    color: 'default',
    withSpacing: true,
  },
  render: (args) => (
    <div>
      <p>Content above the divider</p>
      <Divider {...args} />
      <p>Content below the divider</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    size: 'sm',
    color: 'default',
    withSpacing: false,
  },
  render: (args) => (
    <div className="flex h-20">
      <div>Left content</div>
      <Divider {...args} />
      <div>Right content</div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Divider color="default" />
      <Divider color="primary" />
      <Divider color="destructive" />
      <Divider color="muted" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
    </div>
  ),
};
