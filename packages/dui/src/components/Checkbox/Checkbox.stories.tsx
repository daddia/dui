import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxField } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'select',
      options: [true, false, 'indeterminate'],
      description: 'The controlled checked state of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the checkbox',
    },
    color: {
      control: 'select',
      options: ['default', 'zinc', 'red', 'green', 'amber', 'purple'],
      description: 'The color of the checkbox',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the checkbox takes full width of its container',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
    label: {
      control: 'text',
      description: 'The label of the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    checked: 'indeterminate',
  },
};

export const Required: Story = {
  args: {
    label: 'Required checkbox',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium checkbox',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Large checkbox',
    size: 'lg',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width checkbox',
    fullWidth: true,
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Default color" checked />
      <Checkbox label="Zinc color" checked color="zinc" />
      <Checkbox label="Red color" checked color="red" />
      <Checkbox label="Green color" checked color="green" />
      <Checkbox label="Amber color" checked color="amber" />
      <Checkbox label="Purple color" checked color="purple" />
    </div>
  ),
};

export const CheckboxFieldStory: StoryObj<typeof CheckboxField> = {
  render: () => (
    <div className="space-y-4">
      <CheckboxField control={<Checkbox />} label="Basic option" />
      <CheckboxField
        control={<Checkbox />}
        label="Option with description"
        description="This is additional information that describes the checkbox option in more detail."
      />
      <CheckboxField
        control={<Checkbox color="green" />}
        label="Colored checkbox with description"
        description="You can combine different checkbox variants with the field layout."
      />
    </div>
  ),
};
