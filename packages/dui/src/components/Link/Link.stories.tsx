import type {Meta, StoryObj} from '@storybook/react';
import {Link} from './Link';

const meta: Meta<typeof Link> = {
  title: 'Typography/Link',
  component: Link,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'danger'],
    },
    underline: {
      control: 'boolean',
    },
    external: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" size="xs">
        Extra Small Link
      </Link>
      <Link href="#" size="sm">
        Small Link
      </Link>
      <Link href="#" size="base">
        Base Link
      </Link>
      <Link href="#" size="lg">
        Large Link
      </Link>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" weight="normal">
        Normal Weight
      </Link>
      <Link href="#" weight="medium">
        Medium Weight
      </Link>
      <Link href="#" weight="semibold">
        Semibold Weight
      </Link>
      <Link href="#" weight="bold">
        Bold Weight
      </Link>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" color="default">
        Default Color
      </Link>
      <Link href="#" color="muted">
        Muted Color
      </Link>
      <Link href="#" color="primary">
        Primary Color
      </Link>
      <Link href="#" color="success">
        Success Color
      </Link>
      <Link href="#" color="warning">
        Warning Color
      </Link>
      <Link href="#" color="danger">
        Danger Color
      </Link>
    </div>
  ),
};

export const Underline: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" underline>
        With Underline
      </Link>
      <Link href="#" underline={false}>
        Without Underline
      </Link>
    </div>
  ),
};

export const External: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="https://example.com" external>
        External Link
      </Link>
      <Link href="#" external={false}>
        Internal Link
      </Link>
    </div>
  ),
};
