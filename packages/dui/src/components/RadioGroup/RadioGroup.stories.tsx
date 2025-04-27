import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <RadioGroup.Item value="option-1" label="Option 1" />
      <RadioGroup.Item value="option-2" label="Option 2" />
      <RadioGroup.Item value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" orientation="horizontal">
      <RadioGroup.Item value="option-1" label="Option 1" />
      <RadioGroup.Item value="option-2" label="Option 2" />
      <RadioGroup.Item value="option-3" label="Option 3" />
    </RadioGroup>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <RadioGroup
      label="Select your preferred contact method"
      description="How should we contact you?"
      defaultValue="email"
    >
      <RadioGroup.Item value="email" label="Email" />
      <RadioGroup.Item value="phone" label="Phone" />
      <RadioGroup.Item value="mail" label="Mail" />
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup
      label="Notification preferences"
      description="Select how you want to be notified"
      defaultValue="all"
    >
      <RadioGroup.Item
        value="all"
        label="All notifications"
        description="Receive notifications for all activity"
      />
      <RadioGroup.Item
        value="important"
        label="Important only"
        description="Only receive notifications for important activity"
      />
      <RadioGroup.Item
        value="none"
        label="No notifications"
        description="Don't receive any notifications"
      />
    </RadioGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <RadioGroup
      label="Subscription plan"
      description="Choose your subscription plan"
      defaultValue=""
      error="Please select a subscription plan"
    >
      <RadioGroup.Item value="basic" label="Basic" />
      <RadioGroup.Item value="pro" label="Pro" />
      <RadioGroup.Item value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup
      label="Access level"
      description="Select user access level"
      defaultValue="user"
      disabled
    >
      <RadioGroup.Item value="admin" label="Admin" />
      <RadioGroup.Item value="editor" label="Editor" />
      <RadioGroup.Item value="user" label="User" />
    </RadioGroup>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <RadioGroup label="Access level" description="Select user access level" defaultValue="user">
      <RadioGroup.Item value="admin" label="Admin" disabled />
      <RadioGroup.Item value="editor" label="Editor" />
      <RadioGroup.Item value="user" label="User" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <RadioGroup label="Small size" size="sm" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
      </RadioGroup>

      <RadioGroup label="Medium size (default)" size="md" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
      </RadioGroup>

      <RadioGroup label="Large size" size="lg" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
      </RadioGroup>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RadioGroup color="primary" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Primary (default)" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>

      <RadioGroup color="secondary" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Secondary" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>

      <RadioGroup color="success" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Success" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>

      <RadioGroup color="warning" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Warning" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>

      <RadioGroup color="error" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Error" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>

      <RadioGroup color="info" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Info" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>
    </div>
  ),
};

// Create a proper React component for the Controlled story
const ControlledRadioGroupExample = () => {
  const [value, setValue] = React.useState('option-2');

  return (
    <div className="space-y-4">
      <RadioGroup value={value} onValueChange={setValue} label="Controlled radio group">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
      </RadioGroup>

      <div className="text-sm">
        Selected value: <span className="font-bold">{value}</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setValue('option-1')}
          className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs"
        >
          Select Option 1
        </button>
        <button
          onClick={() => setValue('option-2')}
          className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs"
        >
          Select Option 2
        </button>
        <button
          onClick={() => setValue('option-3')}
          className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs"
        >
          Select Option 3
        </button>
      </div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledRadioGroupExample />
};
