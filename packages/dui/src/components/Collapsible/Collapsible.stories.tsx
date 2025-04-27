import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './Collapsible';
import { Button } from '../Button';
import { Text } from '../Text';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Whether the collapsible is open',
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'Whether the collapsible is open by default',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the collapsible is disabled',
    },
    onOpenChange: {
      description: 'Event handler called when the open state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args} className="w-full max-w-md">
      <CollapsibleTrigger>Toggle content</CollapsibleTrigger>
      <CollapsibleContent>
        <div className="rounded-md border p-4 mt-2">
          <p>This content can be expanded and collapsed.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  args: {
    defaultOpen: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Collapsible {...args} className="w-full max-w-md">
      <CollapsibleTrigger>Disabled trigger</CollapsibleTrigger>
      <CollapsibleContent>
        <div className="rounded-md border p-4 mt-2">
          <p>This content cannot be accessed.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  args: {
    defaultOpen: false,
    disabled: true,
  },
};

export const WithCustomTrigger: Story = {
  render: (args) => (
    <Collapsible {...args} className="w-full max-w-md">
      <CollapsibleTrigger asChild>
        <Button>Click me to toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="rounded-md border p-4 mt-2">
          <p>Using a custom button as the trigger.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  args: {
    defaultOpen: false,
  },
};
