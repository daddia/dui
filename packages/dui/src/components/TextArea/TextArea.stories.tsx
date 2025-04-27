import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';
import { Label } from '../Label';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    rows: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    showCount: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-1">
      <Label htmlFor="with-label">Message</Label>
      <TextArea id="with-label" placeholder="Type your message here..." />
    </div>
  ),
};

export const ResizeOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextArea resize="none" placeholder="Cannot be resized" />
      <TextArea resize="vertical" placeholder="Can be resized vertically" />
      <TextArea resize="horizontal" placeholder="Can be resized horizontally" />
      <TextArea resize="both" placeholder="Can be resized in both directions" />
    </div>
  ),
};

export const RowsSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextArea rows="sm" placeholder="Small height" />
      <TextArea rows="md" placeholder="Medium height (default)" />
      <TextArea rows="lg" placeholder="Large height" />
      <TextArea rows="xl" placeholder="Extra large height" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    placeholder: 'Type your bio here...',
    helperText: 'Brief description about yourself',
  },
};

export const WithCharacterCount: Story = {
  args: {
    placeholder: 'Type your tweet here...',
    maxLength: 280,
    showCount: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Type your message here...',
    value: '',
    error: 'Message is required',
  },
};

export const WithSuccess: Story = {
  args: {
    placeholder: 'Type your message here...',
    value: 'This is a valid message',
    success: 'Message looks good!',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    value: 'You cannot edit this content',
    disabled: true,
  },
};
