import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'The visual variant of the toggle',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the toggle',
    },
    shape: {
      control: 'select',
      options: ['default', 'square', 'pill'],
      description: 'The shape of the toggle',
    },
    pressed: {
      control: 'boolean',
      description: 'Whether the toggle is pressed (controlled)',
    },
    defaultPressed: {
      control: 'boolean',
      description: 'Whether the toggle is initially pressed (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Toggle variant="default">Default</Toggle>
        <Toggle variant="outline">Outline</Toggle>
        <Toggle variant="ghost">Ghost</Toggle>
      </div>

      <div className="flex gap-4">
        <Toggle variant="default" defaultPressed>
          Default On
        </Toggle>
        <Toggle variant="outline" defaultPressed>
          Outline On
        </Toggle>
        <Toggle variant="ghost" defaultPressed>
          Ghost On
        </Toggle>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle shape="default">Rounded</Toggle>
      <Toggle shape="square">Square</Toggle>
      <Toggle shape="pill">Pill</Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle
        defaultPressed
        onIcon={
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v8" />
              <path d="m4.93 10.93 1.41 1.41" />
              <path d="M2 18h2" />
              <path d="M20 18h2" />
              <path d="m19.07 10.93-1.41 1.41" />
              <path d="M22 22H2" />
              <path d="m8 6 4-4 4 4" />
              <path d="M16 18a4 4 0 0 0-8 0" />
            </svg>
            Light
          </span>
        }
        offIcon={
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            Dark
          </span>
        }
      />
    </div>
  ),
};
