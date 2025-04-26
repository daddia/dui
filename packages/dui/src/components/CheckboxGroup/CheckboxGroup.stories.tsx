import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from '../Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Inputs/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    vertical: {
      control: 'boolean',
      description: 'If true, checkboxes will be arranged vertically',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the gap between checkboxes',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the checkbox group will take the full width of its container',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox group is required',
    },
    label: {
      control: 'text',
      description: 'The label for the checkbox group',
    },
    name: {
      control: 'text',
      description: 'The name attribute to be used for all checkboxes in the group',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </>
    ),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Select your favorite fruits',
    required: true,
    children: (
      <>
        <Checkbox label="Apple" />
        <Checkbox label="Banana" />
        <Checkbox label="Orange" />
        <Checkbox label="Strawberry" />
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Select your interests',
    vertical: false,
    children: (
      <>
        <Checkbox label="Sports" />
        <Checkbox label="Music" />
        <Checkbox label="Movies" />
        <Checkbox label="Reading" />
      </>
    ),
  },
};

export const SharedName: Story = {
  args: {
    label: 'Team members',
    name: 'team-members',
    children: (
      <>
        <Checkbox label="John Doe" value="john" />
        <Checkbox label="Jane Smith" value="jane" />
        <Checkbox label="Robert Johnson" value="robert" />
      </>
    ),
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <CheckboxGroup label="Small spacing" size="sm">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>

      <CheckboxGroup label="Medium spacing" size="md">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>

      <CheckboxGroup label="Large spacing" size="lg">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>

      <CheckboxGroup label="Horizontal small" vertical={false} size="sm">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>

      <CheckboxGroup label="Horizontal large" vertical={false} size="lg">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
    </div>
  ),
};
