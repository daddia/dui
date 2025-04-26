import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
    },
    centered: {
      control: 'boolean',
    },
    padded: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Container Content</h2>
        <p className="mt-2">
          This is a default container with max-width of 7xl, centered, and padded.
        </p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    maxWidth: 'sm',
    children: (
      <div className="rounded-lg bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Small Container</h2>
        <p className="mt-2">This is a small container with max-width of sm.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padded: false,
    children: (
      <div className="rounded-lg bg-gray-100 p-4">
        <h2 className="text-xl font-bold">No Padding Container</h2>
        <p className="mt-2">This container has no padding.</p>
      </div>
    ),
  },
};

export const NotCentered: Story = {
  args: {
    centered: false,
    children: (
      <div className="rounded-lg bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Not Centered Container</h2>
        <p className="mt-2">This container is not centered.</p>
      </div>
    ),
  },
};
