import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup } from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: () => (
    <InputGroup>
      <span data-slot="icon">
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
      </span>
      <input
        className="border-input bg-background ring-offset-background focus-visible:ring-primary/25 flex w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        placeholder="Search..."
      />
    </InputGroup>
  ),
};

export const WithMultipleIcons: Story = {
  render: () => (
    <InputGroup>
      <span data-slot="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44 2.04-2.04L17.545 6.75m-16.5 0 2.445-2.44L6 6.75m11.54 12.44-2.04-2.04-.465 2.445m-16.5 0 2.445-2.44L6 21.75l.38-2.03" />
        </svg>
      </span>
      <input
        className="border-input bg-background ring-offset-background focus-visible:ring-primary/25 flex w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        placeholder="Enter password..."
        type="password"
      />
      <span data-slot="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5 1.122 0 2.19-.221 3.176-.621M10.147 5.251a10.459 10.459 0 0 1 1.854-.275c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774" />
          <path d="M6.724 4.969 3 8.692m4.5-3.723 7.529 7.53M13.5 4.97l3.723 3.723" />
        </svg>
      </span>
    </InputGroup>
  ),
};

export const WithButtonAndInput: Story = {
  render: () => (
    <InputGroup>
      <input
        className="border-input bg-background ring-offset-background focus-visible:ring-primary/25 flex w-full rounded-l-md rounded-r-none border-y border-l px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        placeholder="Enter email..."
      />
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary inline-flex h-10 items-center justify-center rounded-r-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
        Subscribe
      </button>
    </InputGroup>
  ),
};
