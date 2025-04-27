import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-1">
      <label htmlFor="withLabel" className="text-foreground text-sm font-medium">
        Email
      </label>
      <Input id="withLabel" placeholder="Enter your email" type="email" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        leftIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        }
        placeholder="With left icon"
      />
      <Input
        rightIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        }
        placeholder="With right icon"
      />
      <Input
        leftIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 19.111c0-2.413 1.697-4.468 4.004-4.97l.208-.035a17.134 17.134 0 0 1 5.576 0l.208.035c2.307.502 4.004 2.557 4.004 4.97 0 .491-.398.889-.889.889H5.89A.889.889 0 0 1 5 19.111zM16.28 6.5a4.28 4.28 0 1 1-8.56 0 4.28 4.28 0 0 1 8.56 0z" />
          </svg>
        }
        rightIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m16 16 3.5 3.5M8 11h8M19.5 8.5v7c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C18.402 18 17.935 18 17 18H7c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C4.5 16.902 4.5 16.435 4.5 15.5v-7c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C5.598 6 6.065 6 7 6h10c.935 0-1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75z" />
          </svg>
        }
        placeholder="With both icons"
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Default variant" />
      <Input variant="error" placeholder="Error variant" error="This field is required" />
      <Input variant="success" placeholder="Success variant" success="Looks good!" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    placeholder: 'Enter your username',
    helperText: 'Your username should be unique',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Required: Story = {
  render: () => (
    <div className="space-y-1">
      <label
        htmlFor="required"
        className="text-foreground after:text-destructive text-sm font-medium after:ml-0.5 after:content-['*']"
      >
        Email
      </label>
      <Input id="required" placeholder="Enter your email" required />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Telephone input" />
      <Input type="url" placeholder="URL input" />
    </div>
  ),
};
