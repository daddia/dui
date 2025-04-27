import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the group',
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      description: 'The spacing between buttons',
    },
    attached: {
      control: { type: 'boolean' },
      description: 'Whether the buttons should be attached',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost'],
      description: 'The variant to apply to all buttons',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size to apply to all buttons',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the group should take the full width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'xs',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};

export const WithVariant: Story = {
  args: {
    variant: 'outline',
    orientation: 'horizontal',
    spacing: 'xs',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};

export const WithSize: Story = {
  args: {
    size: 'sm',
    orientation: 'horizontal',
    spacing: 'xs',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};

export const Attached: Story = {
  args: {
    attached: true,
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup spacing="none">
        <Button>None</Button>
        <Button>None</Button>
        <Button>None</Button>
      </ButtonGroup>

      <ButtonGroup spacing="xs">
        <Button>XS</Button>
        <Button>XS</Button>
        <Button>XS</Button>
      </ButtonGroup>

      <ButtonGroup spacing="sm">
        <Button>SM</Button>
        <Button>SM</Button>
        <Button>SM</Button>
      </ButtonGroup>

      <ButtonGroup spacing="md">
        <Button>MD</Button>
        <Button>MD</Button>
        <Button>MD</Button>
      </ButtonGroup>

      <ButtonGroup spacing="lg">
        <Button>LG</Button>
        <Button>LG</Button>
        <Button>LG</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    spacing: 'sm',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
};

export const VerticalAttached: Story = {
  args: {
    orientation: 'vertical',
    attached: true,
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    spacing: 'sm',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};

export const Mixed: Story = {
  render: () => (
    <ButtonGroup spacing="sm">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </ButtonGroup>
  ),
};
