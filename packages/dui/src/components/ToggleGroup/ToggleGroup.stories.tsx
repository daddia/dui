import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be pressed at a time',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'The visual variant of the toggle group',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the toggle group',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the toggle items',
    },
    shape: {
      control: 'select',
      options: ['default', 'square', 'pill'],
      description: 'The shape of the toggle items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    'aria-label': 'Text alignment',
    size: 'md',
    shape: 'default',
    variant: 'outline',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Left aligned">
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
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="15" x2="3" y1="12" y2="12" />
          <line x1="17" x2="3" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
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
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="18" x2="6" y1="12" y2="12" />
          <line x1="19" x2="5" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
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
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="21" x2="9" y1="12" y2="12" />
          <line x1="21" x2="7" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['bold', 'italic'],
    'aria-label': 'Text formatting',
    size: 'md',
    shape: 'default',
    variant: 'outline',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Bold">
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
          <path d="M14 12a4 4 0 0 0 0-8H6v8" />
          <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
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
          <line x1="19" x2="10" y1="4" y2="4" />
          <line x1="14" x2="5" y1="20" y2="20" />
          <line x1="15" x2="9" y1="4" y2="20" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
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
          <path d="M6 4v6a6 6 0 0 0 12 0V4" />
          <line x1="4" x2="20" y1="20" y2="20" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Vertical: Story = {
  args: {
    type: 'single',
    orientation: 'vertical',
    defaultValue: 'center',
    'aria-label': 'Text alignment',
    variant: 'outline',
    size: 'md',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="top" aria-label="Top aligned">
        Top
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="Bottom aligned">
        Bottom
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Variants: Story = {
  args: {
    type: 'single',
    defaultValue: 'b',
    'aria-label': 'Options',
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ToggleGroup {...args} variant="default">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup {...args} variant="outline">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup {...args} variant="ghost">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    type: 'single',
    variant: 'outline',
    defaultValue: 'b',
    'aria-label': 'Options',
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ToggleGroup {...args} size="sm">
        <ToggleGroupItem value="a">Small A</ToggleGroupItem>
        <ToggleGroupItem value="b">Small B</ToggleGroupItem>
        <ToggleGroupItem value="c">Small C</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup {...args} size="md">
        <ToggleGroupItem value="a">Medium A</ToggleGroupItem>
        <ToggleGroupItem value="b">Medium B</ToggleGroupItem>
        <ToggleGroupItem value="c">Medium C</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup {...args} size="lg">
        <ToggleGroupItem value="a">Large A</ToggleGroupItem>
        <ToggleGroupItem value="b">Large B</ToggleGroupItem>
        <ToggleGroupItem value="c">Large C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Shapes: Story = {
  args: {
    type: 'single',
    variant: 'outline',
    defaultValue: 'b',
    'aria-label': 'Options',
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ToggleGroup {...args} shape="default">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup {...args} shape="square">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup {...args} shape="pill">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
