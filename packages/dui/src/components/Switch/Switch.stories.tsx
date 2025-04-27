import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    defaultChecked: true,
    label: 'Airplane Mode',
  },
};

export const WithLeftLabel: Story = {
  args: {
    defaultChecked: true,
    label: 'Airplane Mode',
    labelPosition: 'left',
  },
};

export const WithDescription: Story = {
  args: {
    defaultChecked: true,
    label: 'Airplane Mode',
    description: 'Turn off all wireless connections',
  },
};

export const Required: Story = {
  args: {
    defaultChecked: true,
    label: 'Terms and Conditions',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const DisabledWithLabel: Story = {
  args: {
    defaultChecked: true,
    label: 'Airplane Mode',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    defaultChecked: true,
    readOnly: true,
    label: 'System Setting (Read-only)',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-8">
        <Switch size="sm" defaultChecked label="Small" />
        <Switch size="md" defaultChecked label="Medium (Default)" />
        <Switch size="lg" defaultChecked label="Large" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-8">
        <Switch variant="default" defaultChecked label="Default" />
        <Switch variant="primary" defaultChecked label="Primary" />
        <Switch variant="success" defaultChecked label="Success" />
        <Switch variant="danger" defaultChecked label="Danger" />
        <Switch variant="warning" defaultChecked label="Warning" />
      </div>
    </div>
  ),
};

// Create a proper React component for the controlled example
const ControlledSwitchExample = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <Switch
        checked={checked}
        onCheckedChange={setChecked}
        label={`Checked: ${checked ? 'Yes' : 'No'}`}
      />
      <button
        onClick={() => setChecked(!checked)}
        className="bg-primary rounded px-4 py-2 text-white"
      >
        Toggle from outside
      </button>
    </div>
  );
};

export const ControlledExample: Story = {
  render: () => <ControlledSwitchExample />,
};
